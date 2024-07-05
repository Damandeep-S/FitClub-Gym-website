import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./Join.css";

const Join = () => {
  const form = useRef();
  const [user_email, setUser_email] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_k2cf5kv',
        'template_35ljijn',
        {
         user_email:user_email
        },
        '_kHGFn5yHYKY6koE_'
      )
      .then(
        () => {
          alert("Thank you. I will get back to you as soon as possible.");
 
          console.log('Successful');
        },
        (error) => {
          
          console.error(error);
          console.log('error');
 
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span>WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email address"
            onChange={(e)=>setUser_email(e.target.value)}
          />
          <button className="btn btn-join">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
