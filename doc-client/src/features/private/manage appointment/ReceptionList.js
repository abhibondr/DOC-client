import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../../../ui/toast/Toast";

const BookAppointmentByAdmin = () => {
  // const [firstName, setFirstName] = useState("");
  const [userInfo, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [doctorInfo, setName] = useState("");
  const [feesPerCunsaltation, setFeesconsaltation] = useState("");
  const [time, setTime] = useState("");
  const [weight, setWeight] = useState();
  const [date, setdate] = useState();

  const navigate = useNavigate();
  const resetInputs = () => {
    setFirstName("");
    setLastName("");
    setAddress("");
    setName("");
    setPhone("");
    setFeesconsaltation("");
    setTime("");
    setWeight("");
    setAge("");
    setdate("");
  };

  const BookAppointmentHandle = async (e) => {
    e.preventDefault();

    const formData = {
      userInfo,
      lastName,
      address,
      age,
      doctorInfo,
      time,
      phone,
      feesPerCunsaltation,
      weight,
      date,
    };

    await axios
      .post("http://localhost:9999/api/doctor/book-appointment", formData)
      .then((response) => {
        successToast("appointment is booked ");
        console.log(response.data);
        // resetInputs();
        navigate("/secured");
      })
      .catch((err) => {
        console.log(err);
        errorToast("appointment is not booked ");
        // resetInputs();
      });

    console.log("formdata: ", formData);
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Patient Registration </h2>
      <Container
        sx={{
          maxWidth: 500,
          minWidth: 300,
          marginTop: 5,

          border: "1px solid #c6ccc8",
          borderRadius: 2,
          p: 5,
        }}
      >
        <form onSubmit={BookAppointmentHandle}>
          {/* {/ <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>  /} */}
          <h3> Personal Details</h3>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} sx={{ mb: 2 }}>
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={userInfo}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6} sx={{ mb: 2 }}>
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6} sx={{ mb: 4 }}>
              <TextField
                type="number"
                variant="outlined"
                color="secondary"
                label="Age"
                onChange={(e) => setAge(e.target.value)}
                value={age}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{ mb: 4 }}>
              <TextField
                type="number"
                variant="outlined"
                color="secondary"
                label="Weight"
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{ mb: 2 }}>
              <TextField
                type="number"
                variant="outlined"
                color="secondary"
                label="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{ mb: 2 }}>
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="Address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                required
                fullWidth
                sx={{ mb: 4 }}
              />
            </Grid>
          </Grid>

          <h3> Doctor To Visit</h3>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} sx={{ mb: 2 }}>
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="Name"
                onChange={(e) => setName(e.target.value)}
                value={doctorInfo}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12} sx={{ mb: 2 }}>
              <TextField
                type="number"
                variant="outlined"
                color="secondary"
                label="Fees Per Consultation"
                onChange={(e) => setFeesconsaltation(e.target.value)}
                value={feesPerCunsaltation}
                fullWidth
                required
              />
            </Grid>

            <br />
            <Grid item xs={12} sm={6} md={6} sx={{ mb: 4 }}>
              <TextField
                type="date"
                variant="outlined"
                color="secondary"
                label="date"
                InputLabelProps={{ shrink: true }}
                // onChange={(e) => setDate(e.target.value)}
                onChange={(e) =>
                  // setDate(moment(e.target.value).format("YYYY-MM-DD"))
                  setdate(e.target.value)
                }
                value={date}
                fullWidth
                required
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{ mb: 4 }}>
              <TextField
                type="time"
                variant="outlined"
                color="secondary"
                label="time"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setTime(e.target.value)}
                value={time}
                fullWidth
                required
              />
            </Grid>
          </Grid>

          <Button variant="contained" color="primary" type="submit">
            Book Now
          </Button>
        </form>
      </Container>
    </>
  );
};

export default BookAppointmentByAdmin;
