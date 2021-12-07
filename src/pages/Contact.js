import React, {useState} from 'react';

function Contact() {
    
  
    return (
      <>
      <h4 className="contact-header">CONTACT ME</h4>
      <main className="contact">
          <div className="login-box">
              <form className='contact-form'>
              <div className="contact-field">
                <label className='contact-label' htmlFor="firstName">First Name:</label>
                <input
                  className='form-input'
                  placeholder="First"
                  name="firstName"
                  type="firstName"
                  id="firstName"
                />
              </div>
              <div className="contact-field">
                <label className='contact-label' htmlFor="lastName">Last Name:</label>
                <input
                  className='form-input'
                  placeholder="Last"
                  name="lastName"
                  type="lastName"
                  id="lastName"
                />
              </div>
              <div className="contact-field">
                <label className='contact-label' htmlFor="phoneNumber">Phone Number:</label>
                <input
                  className='form-input'
                  placeholder="123-456-7890"
                  name="phoneNumber"
                  type="phoneNumber"
                  id="phoneNumber"
                />
              </div>
              <div className="contact-field">
                <label className='contact-label' htmlFor="email">Email:</label>
                <input
                  className='form-input'
                  placeholder="youremail@email.com"
                  name="email"
                  type="email"
                  id="email"
                />
              </div>
              <div className="contact-field">
                <label className='contact-label' htmlFor="password">Message:</label>
                <textarea rows="4" cols="50" name="comment" form="usrform" className='form-input' placeholder='Enter text here'>
                </textarea>
              </div>
              <div className="signup-btn flex-row space-between">
                <button className='btn' type="submit">Submit</button>
              </div>
            </form>
          </div>
      </main>
      </>
    );
  }
  
  export default Contact;