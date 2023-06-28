import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../../../ui/toast/Toast";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Card from "@mui/material/Card";
import FeedbackService from "../../../services/feedbackService";

const BookAppointmentByAdmin = () => {
  const [doctors, setDoctors] = useState([]);
  const [doctorId, setdoctorId] = useState();
  const [rating, setRating] = useState("");
  const [text, setText] = useState("");
  const [doctor, setDoctor] = useState();
  const [doctorInfo, setName] = useState("");

  const handleChange = (event) => {
    setdoctorId(event.target.value);
    console.log(event.target.value);
  };

  const navigate = useNavigate();
  const resetInputs = () => {
    setdoctorId("");
    setRating("");
    setText("");
    setName("");
  };

  const BookAppointmentHandle = async (e) => {
    e.preventDefault();

    const formData = {
      doctorInfo,
      rating,
      text,
    };

    await FeedbackService.createUser(formData)
      .then((response) => {
        successToast("Feedback sent...");
        console.log(response.data);
        resetInputs();
        navigate("/secured");
      })
      .catch((err) => {
        console.log(err);
        errorToast("Please fill the required fields... ");
        resetInputs();
      });

    console.log("formdata: ", formData);
  };
  useEffect(() => {
    axios
      .get("http://localhost:9999/api/admin/getAllDoctors")
      .then((response) => {
        console.log("response data: ", response.data.data);
        setDoctors(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Feedback Form </h2>
      <Card
        sx={{
          maxWidth: 500,
          minWidth: 300,
          display: "flex",
          justifyContent: "center",
          margin: "auto",
          marginTop: 10,

          border: "1px solid #c6ccc8",
          borderRadius: 2,
          p: 5,
        }}
      >
        <form onSubmit={BookAppointmentHandle}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} sx={{ mb: 2 }}>
              <FormControl sx={{ m: 1, width: 420 }} size="large">
                <InputLabel id="demo-select-small-label">Doctor</InputLabel>
                <Select
                  size="large"
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={doctor}
                  label="Age"
                  fullWidth
                  onChange={handleChange}
                >
                  {Array.isArray(doctors) &&
                    doctors.map((doctor, id) => (
                      <MenuItem
                        key={id}
                        value={doctor._id}
                        onClick={() =>
                          setName(doctor.firstName + " " + doctor.lastName)
                        }
                      >
                        {doctor.firstName} {doctor.lastName}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12} md={12} sx={{ mb: 2 }}>
              <TextField
                type="number"
                variant="outlined"
                color="secondary"
                label="Rating"
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                fullWidth
                required
              />
              <div>
                <h6 style={{ color: "#269", padding: 5 }}>
                  Enter rating between 1 to 5
                </h6>
              </div>
            </Grid>

            <br />
            <Grid item xs={12} sm={12} md={12} sx={{ mb: 4 }}>
              <TextField
                id="standard-multiline-flexible"
                label="Your Feedback"
                placeholder="Your Feedback..."
                multiline
                maxRows={4}
                fullWidth
                variant="standard"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Grid>
          </Grid>

          <Button variant="contained" color="primary" type="submit" fullWidth>
            Submit
          </Button>
        </form>
      </Card>
    </>
  );
};

export default BookAppointmentByAdmin;
