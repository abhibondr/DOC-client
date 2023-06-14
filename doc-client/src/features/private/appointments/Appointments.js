import React, { useEffect, useState } from "react";
import MuiDatatable, { MUIDataTableColumn } from "mui-datatables";
import axios from "axios";
const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9999/api/doctor/user-appointments")
      .then((response) => {
        console.log("appointments: ", response.data.data);
        setAppointments(response.data.data);
      });
  }, []);
  const columns = [
    {
      label: "ID",
      name: "userId",
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
      <div>
        {/* <div>
          <h2> {appointments && appointments.message}</h2>

          <div>
            {appointments &&
              appointments.data.map((appointment, i) => (
                <div key={i}>
                  <h3> id: {appointment._id}</h3>
                  <button
                    onClick={() => console.log("appointment: ", appointment)}
                  >
                    getInfoappoint
                  </button>
                </div>
              ))}
          </div>
        </div> */}
      </div>
      <MuiDatatable
        title="Appointment List"
        // data={customerList?.filter((u) => u?._id != loggedUser?._id)}
        // data={customerList?.map((u, i) => u)}
        data={appointments}
        columns={columns}
        // columns={appointments}
      />
    </>
  );
};

export default Appointments;
