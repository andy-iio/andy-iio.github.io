import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  
  const [submitted, setSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // emailjs.sendForm('secret', 'secret', form.current, 'APIKEY_hidden_for_github_check_keep')
    emailjs.sendForm('service_4vzj3hj', 'template_xxinp0k', form.current, 'ZmsAjgrP1atwnCSIP')  
    .then((result) => {
        console.log(result.text);
        console.log("message sent");
        setSubmitted(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="container my-5 position-relative">
      <div className="row contact-form">
        <h2 className="text-center">Contact Me</h2>
        {submitted ? (
          <p className='text-center'>Thank you for your message! I will be in touch shortly.</p>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="position-relative">
            <div className="form-group mb-3">
              <label htmlFor="name" className="mb-2">Name</label>
              <input 
                type="text" 
                name="user_name" 
                className="form-control" 
                id="name" 
                required 
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email" className="mb-2">Email</label>
              <input 
                type="email" 
                name="user_email" 
                className="form-control" 
                id="email" 
                required 
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="message" className="mb-2">Message</label>
              <textarea 
                name="message" 
                className="form-control" 
                id="message" 
                rows="5" 
                required 
              />
            </div>
            <button 
              type="submit" 
              className="btn btn-primary my-3 float-end px-4"
            >
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
