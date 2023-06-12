import React from "react";
import "./Services.css";
import general from "../Images/general.png";
import specialist from "../Images/specialist.jpg";
import dentist from "../Images/dentist.jpg";
import time from "../Images/time.jpg";
import { Grid } from "@mui/material";
import Footer from "../footer/Footer";

const ServicesPage = () => {
  return (
    <div className="Service component_space" id="Services">
      <div className="heading">
        <h1 className="heading">Hospital Services</h1>
        <p className="heading P_color">
          <b style={{ fontSize: 22 }}>Best Care & Best Doctor</b>
        </p>
        <p className="heading P_color">
          Our Clinic open for you 24/7 and 7days in week,
        </p>
        <p className="heading P_color">
          Be save,and stay at home get your online
        </p>
        <p className="heading P_color">
          reservation in any doctor or any clinic what ever where you are.
        </p>
      </div>
      <div className="container">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="service_box pointer">
              <div className="service_meta grid">
                <h1 className="service_text">
                  <b>General Practice</b>
                </h1>
                <p className="p service_text p_color">
                  We Treat all common medical
                  <br /> conditions and refer patient to Hospitals <br />
                  and other medical services for urgent <br />
                  and specialist treatment.
                  <br />
                </p>
                <img src={general} alt="" />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="service_box pointer">
              <div className="service_meta grid">
                <h1 className="service_text">
                  <b>Specialist</b>
                </h1>
                <p className="p service_text p_color">
                  We all speciallised in,Orthopedic
                  <br /> surgeon, Neurology, Cardiology,
                  <br /> Pathology, Plastic Surgeon etc.
                  <br />
                </p>
                <img src={specialist} alt="" />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="service_box pointer">
              <div className="service_meta grid">
                <h1 className="service_text">
                  <b>Dentist</b>
                </h1>
                <p className="p service_text p_color">
                  We provide good care of teeth and
                  <br /> gums can help you to reduce risk for
                  <br /> other serious health conditions.
                  <br />
                </p>
                <img src={dentist} alt="" />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="service_box pointer">
              <div className="service_meta grid">
                <h1 className="service_text">
                  <b>Medical Emergency</b>
                </h1>
                <p className="p service_text p_color">
                  24/7 Emergency care center, we
                  <br /> provide ambulance services all
                  <br />
                  time.Provide urgent pre-hospital
                  <br /> treatment.
                  <br />
                </p>
                <img src={time} alt="" />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
