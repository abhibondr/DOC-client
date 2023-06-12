import React from "react";
import Footer from "../footer/Footer";
import("./Contact.css");
const ContactPage = () => {
  return (
    <div className="row bg">
      <div className="col-12 col-md-6">
        <form>
          <h3>CONTACT US</h3>
          <h1>
            Always connect <span>with us</span>
          </h1>
          <br />
          <input type="text" name="name" id="" placeholder="Enter your name" />
          <input type="number" name="number" id="" placeholder="+91" />
          <input
            type="email"
            name="email"
            id=""
            placeholder="example@gmail.com"
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="type your message here...."
          />
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="col col-md-5" style={{ margin: "auto", left: 10 }}>
        <img
          className="img-fluid"
          src="https://buymeds.in/wp-content/uploads/2021/07/Doctors-Voice-Call-Consultation.png"
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
