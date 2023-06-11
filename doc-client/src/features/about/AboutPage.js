import React from "react";
import doctor from "../Images/doctor.png";
import "./about.css";
import { Link, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const Appointment = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: "black",
    height: 60,
    lineHeight: "60px",
    border: "1px solid black",

    "&:hover": {
      backgroundColor: "#4d2822",
      color: "white",

      fontSize: 16,
    },
  }));

  const Link = styled(NavLink)({
    textDecoration: "none",
    "&:hover": {
      color: "white",
      cursor: "pointer",
      fontSize: 16,
    },
  });

  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/services");
  };
  return (
    <div className="appointment my-4">
      <div className="container">
        <div className="row">
          <div className="col-md-5 d-none d-md-block">
            <img src={doctor} alt="" />
          </div>
          <div className="col-md-7 text-white py-5">
            <h5 className="brand-color text-uppercase">AppointMent</h5>
            <h1 className="">
              Make An AppointMent <br /> today
            </h1>
            <p>
              We all speciallised in,Orthopedic surgeon, Neurology, Cardiology,
              Pathology, Plastic Surgeon etc.
            </p>
            <p>
              We Treat all common medical conditions and refer patient to
              Hospitals and other medical services for urgent and specialist
              treatment.
            </p>
            <button className="btn btn-primary" onClick={handleReadMore}>
              Learn More
            </button>
          </div>
        </div>
        <div className="row">
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h4">Specialties</Typography>
            <Typography variant="subtitle1">
              Find the right provider for you.
            </Typography>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
