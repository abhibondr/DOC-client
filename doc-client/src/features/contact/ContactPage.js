import React from "react";
import("./Contact.css");
const ContactPage = () => {
  return (
    <form>
      <h3>CONTACT US</h3>
      <h1>
        Always connect <span>with us</span>
      </h1>
      <br />
      <input type="text" name="name" id="" placeholder="Enter your name" />
      <input type="number" name="number" id="" placeholder="+91" />
      <input type="email" name="email" id="" placeholder="example@gmail.com" />
      <textarea
        name="message"
        id=""
        cols="30"
        rows="10"
        placeholder="type your message here...."
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactPage;
