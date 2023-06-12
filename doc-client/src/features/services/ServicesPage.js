import React from "react";
import "./Services.css";
import general from "../Images/general.png";
import specialist from "../Images/specialist.jpg";
import dentist from "../Images/dentist.jpg";
import time from "../Images/time.jpg";
import Footer from "../footer/Footer";

const ServicesPage = () => {
  return (
    <div className="Service component_space" id="Services">
      <div className="heading">
        <h1 className="heading">Hospital Services</h1>
        <p className="heading P_color">
          <b>Best Care & Best Doctor</b>
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
        <div className="row">
          <div className="col_3">
            <div className="service_box pointer">
              <div className="service_meta">
                <h1 className="service_text">
                  <b>General Practice</b>
                </h1>
                <p className="p service_text p_color">
                  We Treat all common medical conditions and refer
                </p>
                <p className="p service_text p_color">
                  patient to Hospitals and other medical services for
                </p>
                <p className="p service_text p_color">
                  urgent and specialist treatment.
                  <br />
                  <img src={general} alt="" />
                </p>
              </div>
            </div>
          </div>
          <div className="col_3">
            <div className="service_box pointer">
              <div className="service_meta">
                <h1 className="service_text">
                  <b>Specialist</b>
                </h1>
                <p className="p service_text p_color">
                  We all speciallised in,Orthopedic surgeon,
                </p>
                <p className="p service_text p_color">
                  Neurology, Cardiology, Pathology, Plastic Surgeon
                </p>
                <p className="p service_text p_color">
                  etc.
                  <br />
                  <img src={specialist} alt="" />
                </p>
              </div>
            </div>
          </div>
          <div className="col_3">
            <div className="service_box pointer">
              <div className="service_meta">
                <h1 className="service_text">
                  <b>Dentist</b>
                </h1>
                <p className="p service_text p_color">
                  We provide good care of teeth and gums can
                </p>
                <p className="p service_text p_color">
                  help you reduce your risk for other serious
                </p>
                <p className="p service_text p_color">
                  health conditions.
                  <br />
                  <img src={dentist} alt="" />
                </p>
              </div>
            </div>
          </div>
          <div className="col_3">
            <div className="service_box pointer">
              <div className="service_meta">
                <h1 className="service_text">
                  <b>Service</b>
                </h1>
                <p className="p service_text p_color">
                  24/7 Emergency care center.
                  <br />
                  <img src={time} alt="" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
