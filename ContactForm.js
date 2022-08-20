// import { send } from "q";
import React from "react";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Us.css";
// import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = () => {};
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_meavtxh",
  //       "template_6hysfy5",
  //       form.current,
  //       "3bIjMu6wyel_dAqd7"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  return (
    <section>
      <h3>CHMS</h3>
      <div className="container">
        
        <div className="contain">
          <h2>Contact Us</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Enter your name"
              name="user_name"
              className="details"
              required
            />
            <input
              type="email"
              placeholder="Enter your mail"
              name="user_email"
              required
              className="details"
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              required
              className="details"
            />
            <textarea name="message" cols="30" rows="10" placeholder="Enter the message here"></textarea>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
