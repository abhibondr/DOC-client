import { Container, Grid, TableContainer, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import Youtube from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <>
      <div className="parent">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h5" marginLeft="20px">
              Doctor <br />
              Appointment
            </Typography>
            <Typography variant="body2" marginLeft="20px">
              Doctor Appointment is a registered start up company
              <br /> empanelled with 20 plus doctors and 500 patients lives
              touched.
            </Typography>
            <Typography marginLeft="20px">
              <Facebook fontSize="small" />
              <Instagram fontSize="small" />
              <Twitter fontSize="small" />
              <Youtube fontSize="small" />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h6" marginLeft="20px">
              For Information
            </Typography>
            <Typography variant="body2" marginLeft="20px">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/about"
              >
                - About Us
              </Link>
            </Typography>

            <Typography variant="body2" marginLeft="20px">
              - Booking Guides
            </Typography>

            <Typography variant="body2" marginLeft="20px">
              - Pharmacy
            </Typography>

            <Typography variant="body2" marginLeft="20px">
              - Careers
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h6" marginLeft="20px">
              Helpful Links
            </Typography>
            <Typography variant="body2" marginLeft="20px">
              - Booking Appointment
            </Typography>

            <Typography variant="body2" marginLeft="20px">
              - SMS Booking
            </Typography>

            <Typography variant="body2" marginLeft="20px">
              <Link
                to="/services"
                style={{ textDecoration: "none", color: "white" }}
              >
                - Services
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h6" marginLeft="20px">
              Contact Us
            </Typography>
            <Typography variant="body2" marginLeft="20px">
              - Ankur Hospital PVT LTD.
            </Typography>

            <Typography variant="body2" marginLeft="20px">
              - +91 8208224984
            </Typography>

            <Typography variant="body2" marginLeft="20px">
              - Customer Support: poonam123@gmail.com
            </Typography>

            <Typography variant="body2" marginLeft="20px">
              - Official Queries: abhi123@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Footer;
