import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../app/slice/AuthSlice";
import { errorToast, successToast } from "../../../ui/toast/Toast";

const BookAppointment = () => {
  const [doctor, setDoctors] = useState();

  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const params = useParams();
  const doctorId = params.id;
  if (doctor) {
    var doctorInfo = `${doctor.firstName} ${doctor.lastName}`;
  }
  const user = useSelector(selectAuth);
  const navigate = useNavigate();

  const userId = user._id;
  const userInfo = `${user.name.first} ${user.name.last}`;
  // on book now button clicked

  const resetInputs = () => {
    setTime("");
    setDate("");
  };

  const BookAppointmentHandle = async (e) => {
    e.preventDefault();

    const formData = {
      userId,
      doctorId,
      doctorInfo,
      userInfo,
      date,
      time,
    };

    await axios
      .post("http://localhost:9999/api/doctor/book-appointment", formData)
      .then((response) => {
        successToast("appointment is booked ");
        console.log(response.data);
        resetInputs();
        navigate("/secured");
      })
      .catch((err) => {
        console.log(err);
        errorToast("appointment is not booked ");
        resetInputs();
      });

    console.log("formdata: ", formData);
  };

  useEffect(() => {
    const response = axios
      .get(`http://localhost:9999/api/doctor/getDoctorInfo/${doctorId}`)
      .then((response) => {
        console.log("response data doctor: ", response.data.data);
        setDoctors(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h3 style={{ textAlign: "center", color: "darkblue" }}>
        Book an Appointment
      </h3>

      {!doctor && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}

      {doctor && (
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form onSubmit={BookAppointmentHandle}>
            {" "}
            <Card sx={{ minWidth: 330, width: 430, p: 3 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Dr.{doctor.firstName} {doctor.lastName}
                  {/* Dr.{`${doctor.firstName} ${doctor.lastName}`} */}
                </Typography>
                <Typography variant="h5" component="div"></Typography>
                <Typography sx={{ mb: 1.5 }} variant="h5">
                  Fees: {doctor.feesPerCunsaltation}
                  {/* Fees Per Consultation {doctor.feesPerCunsaltation} */}
                </Typography>
                <Typography variant="h5">
                  {/* Timing {doctor.timings} */}
                  Timings:{doctor.timings.startTime} - {doctor.timings.endTime}
                  <br />
                </Typography>
              </CardContent>
              <Typography variant="h6" fontSize={16}>
                Select Date
              </Typography>
              <TextField
                type="date"
                variant="outlined"
                color="secondary"
                // label="date"
                // InputLabelProps={{ shrink: false }}
                // onChange={(e) => setDate(e.target.value)}
                onChange={(e) =>
                  // setDate(moment(e.target.value).format("YYYY-MM-DD"))
                  setDate(e.target.value)
                }
                value={date}
                fullWidth
                required
                sx={{ mb: 2 }}
              />
              <Typography variant="h6" fontSize={16}>
                Select Time
              </Typography>
              <TextField
                type="time"
                variant="outlined"
                color="secondary"
                // label="time"
                // InputLabelProps={false}
                onChange={(e) => setTime(e.target.value)}
                value={time}
                fullWidth
                required
                sx={{ mb: 4 }}
              />
              <CardActions>
                <Button type="submit" size="small" variant="contained">
                  Book Now
                </Button>
              </CardActions>
            </Card>
          </form>
        </div>
      )}
    </>
  );
};

export default BookAppointment;
