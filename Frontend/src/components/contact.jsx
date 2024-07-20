import React, { useState } from 'react';
import './contact.css';
import cross from '../assets/cross.png';
import { Link } from 'react-router-dom';
import GitLogo from '../assets/GitLogo.png';
import insta from '../assets/insta.png';
import linkedinLogo from '../assets/linkedinLogo.png';
import twitterLogo from '../assets/twitterLogo.png';
import smile from '../assets/smile.png';
import sad from '../assets/sad.png';
import send from '../assets/send.png';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    message: "",
  });

  
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData(() => ({
   
      [name]: value,
    }));
  };
  const sendFeedback = () => {
    
      toast.success("Sent successfully");
      console.log( formData);

  
  };


  return (
    <div className='contact-page'>
      <div className='about-toast'>
        <div className='toast'>
          <div className='toast-circle'>!</div>
          <p>Contact me</p>
          <Link to="/"><img width="40px" className='cross' src={cross} alt="" /></Link>
        </div>
      </div>

      <div className="main-contact">
        <div className="left-contact">
          <p className='contactUs'>Contact us</p>
          <p className='contactPara'>Need to get in touch with me? Either fill out the form with your enquiry or get in touch on these social media platforms</p>
          <div className="icons">
            <Link><img src={GitLogo} className='icon' alt="" /></Link>
            <Link><img src={linkedinLogo} className='icon' alt="" /></Link>
            <Link><img src={twitterLogo} className='icon' alt="" /></Link>
            <Link><img src={insta} className='icon' alt="" /></Link>
          </div>
        </div>

        <div className="right-contact">
          <div className='form'>
            <div className="form-bg">
              <input
                type="text"
                name="username"
                placeholder='Enter your name'
                onChange={changeHandler}
              />
              <input
                type="text"
                name="email"
                placeholder='Enter your email'
                onChange={changeHandler}
              />
              <textarea
                className='txtArea'
                name="message"
                placeholder='Enter your message'
                onChange={changeHandler}
              ></textarea>
            </div>
            <div className="contactIcon">
              <div className="contactIconLeft">
                <img className='one' src={smile} alt="" />
                <img className='two' src={sad} alt="" />
              </div>
              <div className="ContactIconRight">
                <button className='sendBtn' onClick={sendFeedback}><img src={send} alt="" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
