import { send } from "q";
import React from "react";
import { useRef } from "react";
// import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()
    const sendEmail = () => {};
    return(
        <section>
            <div className="container">
                <h2 className="--text-center">Contact Us</h2>
                <form ref={form} onSubmit={sendEmail} className="--form-control --card --flex-content --dir-column">
                    <input type="text"
                    placeholder="Full Name"
                    name="user_name" required/>
                      <input type="email"
                    placeholder="Email"
                    name="user_email" required/>
                    <input type="text"
                    placeholder="Subject"
                    name="subject" required/>
                    <textarea name="message" cols="30" rows="10"></textarea>
                    <button className="--btn--btn-primary" type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;