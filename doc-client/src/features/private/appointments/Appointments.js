import React, { useEffect, useState } from "react";
import MuiDatatable, { MUIDataTableColumn } from "mui-datatables";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../app/slice/AuthSlice";
const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  const user = useSelector(selectAuth);
  const id = user._id;
  async function appointmentData() {
    await axios
      .get(`http://localhost:9999/api/doctor/user-appointments/${id}`)
      .then((response) => {
        console.log("appointments: ", response.data.data);
        const latestAppointment = response.data.data;
        latestAppointment.reverse();
        console.log("latestAppointment: ", latestAppointment);
        setAppointments(latestAppointment);
      });
  }

  useEffect(() => {
    appointmentData();
  }, []);

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
  ];
  return (
    <>
      <MuiDatatable
        title="Appointment List"
        data={appointments}
        columns={columns}
      />
    </>
  );
};

export default Appointments;
