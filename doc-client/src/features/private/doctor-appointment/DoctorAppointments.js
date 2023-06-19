import { IconButton } from "@mui/material";
import DeniedButton from "@mui/icons-material/Delete";
import ApproveButton from "@mui/icons-material/ThumbUp";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import { errorToast, successToast } from "../../../ui/toast/Toast";

const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  async function fetchdata() {
    await axios
      .get("http://localhost:9999/api/doctor/doctor-appointments")
      .then((response) => {
        console.log("appointments: ", response.data.data);
        const latestAppointment = response.data.data;
        latestAppointment.reverse();
        console.log("latestAppointment: ", latestAppointment);
        setAppointments(latestAppointment);
      });
  }

  useEffect(() => {
    fetchdata();
  }, []);

  const handleStatus = async (id, status) => {
    try {
      const res = await axios.put(
        `http://localhost:9999/api/doctor/update-status/${id}`,
        { status }
      );
      successToast("Update successfully");
      fetchdata();
      // if (res.data) {
      //   setAppointments(res.data);
      //   // console.log(res.data.data);
      //   console.log("appointments:", appointments);
      // }
    } catch (error) {
      console.log(error);
      errorToast("Something went wrong");
    }
  };

  const columns = [
    {
      label: "Patient",
      name: "userInfo",
      options: {
        sort: true,
        filter: false,
      },
    },

    {
      label: "doctor",
      name: "doctorInfo",
      options: {
        sort: true,
        filter: false,
      },
    },

    {
      label: "Date",
      name: "date",
      options: {
        sort: true,
        filter: false,
      },
    },

    {
      label: "Time",
      name: "time",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "Status",
      name: "status",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "Action",
      name: "action",
      options: {
        sort: false,
        filter: false,
        customBodyRenderLite: (index, record) => {
          const user = appointments[index];
          return (
            <>
              {user.status == "pending" && (
                <>
                  <IconButton
                    color="success"
                    onClick={() => handleStatus(user?._id, "approved")}
                  >
                    <ApproveButton />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleStatus(user?._id, "denied")}
                  >
                    <DeniedButton />
                  </IconButton>
                </>
              )}
            </>
          );
        },
      },
    },
  ];
  return (
    <>
      <MUIDataTable
        title="Doctor Appointment List"
        data={appointments}
        columns={columns}
      />
    </>
  );
};

export default DoctorAppointments;
