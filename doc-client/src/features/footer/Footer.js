import { Container, Grid, TableContainer, Typography } from "@mui/material";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <Container className="parent">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h3" sx={{ margin: "15px" }}>
              Doctor <br />
              Appointment
            </Typography>
            <Typography variant="h6" sx={{ margin: "15px" }}>
              <p>
                Doctor Appointment is a registered start up company empanelled
                with 20 plus doctors and 500 patients lives touched.
              </p>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h4" sx={{ margin: "15px" }}>
              For Information
            </Typography>
            <Typography variant="h6" sx={{ margin: "15px" }}>
              - About Us
            </Typography>
            <Typography variant="h6" sx={{ margin: "15px" }}>
              -Booking Guides
            </Typography>
            <Typography variant="h6" sx={{ margin: "15px" }}>
              - Pharmacy
            </Typography>
            <Typography variant="h6" sx={{ margin: "15px" }}>
              -Careers
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h4" sx={{ margin: "15px" }}>
              Helpful Links
            </Typography>
            <Typography variant="h6" sx={{ margin: "15px" }}>
              -Booking Appointment
            </Typography>
            <Typography variant="h6" sx={{ margin: "15px" }}>
              - SMS Booking
            </Typography>
            <Typography variant="h6" sx={{ margin: "15px" }}>
              - Services
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h4" sx={{ margin: "15px" }}>
              Contact Us
            </Typography>
            <Typography variant="h6" sx={{ margin: "15px" }}>
              - Ankur Hospital PVT LTD,
              <br />
              Nanded,Maharashtra.
            </Typography>
            <Typography variant="h6" sx={{ margin: "15px" }}>
              - +91 8208224984
            </Typography>
            <Typography variant="h6" sx={{ margin: "15px" }}>
              - Customer Support: poonam123@gmail.com
            </Typography>
            <Typography variant="h6" sx={{ margin: "15px" }}>
              - Official Queries: abhi@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Footer;
