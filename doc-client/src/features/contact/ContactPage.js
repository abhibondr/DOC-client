import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../app/slice/AuthSlice";
import { successToast } from "../../ui/toast/Toast";
import QueryService from "../../services/QueryService";
import Footer from "../footer/Footer";
import("./Contact.css");

const ContactPage = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery({ ...query, [name]: value });
  };

  const handleQuery = (event) => {
    event.preventDefault();

    QueryService.createUser(query)
      .then((response) => {
        dispatch(addUser(response?.data));
        successToast("Send the query...");
        console.log(response?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="row bg">
      <div className="col-12 col-md-6">
        <form>
          <h3>CONTACT US</h3>
          <h1>
            Always connect <span>with us</span>
          </h1>
          <br />
          <input
            type="text"
            name="name.first"
            placeholder="Enter your first name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="name.last"
            placeholder="Enter your last name"
            onChange={handleChange}
          />
          <input
            type="number"
            name="mobile"
            placeholder="+91"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="example@gmail.com"
            onChange={handleChange}
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="type your message here...."
            onChange={handleChange}
          />
          <button type="submit" onClick={handleQuery}>
            Send
          </button>
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
