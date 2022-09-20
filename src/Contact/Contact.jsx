import React,{useRef, useState} from 'react'
import emailjs from '@emailjs/browser';

import './Contact.css';
function Contact() {
  
  const [done,setDone] = useState(false);


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5291n9m', 'template1234324', form.current, 'eBs4o8v6cmheTDyjc')
      .then((result) => {
         console.log(result.text)
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form  ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"   required />
          <input type="email" name="user_email" className="user" placeholder="Email"  required />
          <textarea name="user_message" className="user" placeholder="Message" required />
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Message sent Successfully. Thanks for contacting with me."}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  )
}

export default Contact