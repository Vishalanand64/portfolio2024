import './contact.css';

import GitLogo from '../assets/GitLogo.png';
import insta from '../assets/insta.png';
import linkedinLogo from '../assets/linkedinLogo.png';
import twitterLogo from '../assets/twitterLogo.png';
import smile from '../assets/smile.png';
import sad from '../assets/sad.png';
import send from '../assets/send.png';
import toast from 'react-hot-toast';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    message: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendFeedback = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        toast.success(data.message);
        setFormData({
          email: "",
          username: "",
          message: "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('Failed to send feedback');
    }
  };

  return (
    <div className='contact-page'>
      <div className='contact'>
        Contact
      </div>

      <div className='main-containerr'>
        <div className="main-contact">
          <div className="left-contact">
            <p className='contactUs'>Contact us</p>
            <p className='contactPara'>Need to get in touch with me? Either fill out the form with your enquiry or get in touch on these social media platforms</p>
            <div className="icons">
             <a href="https://github.com/Vishalanand64" target='_blank' rel="noopener noreferrer"><img src={GitLogo} className='icon' alt="GitHub" /></a>
              <a href="https://www.linkedin.com/in/vishal-anand-00kb/" target='_blank' rel="noopener noreferrer"><img src={linkedinLogo} className='icon' alt="LinkedIn" /></a>
              <a ><img src={twitterLogo} className='icon' alt="Twitter" /></a>
              <a href="https://www.instagram.com/_vishal.anand/" target='_blank' rel="noopener noreferrer"><img src={insta} href="https://github.com/Vishalanand64" target='_blank' rel="noopener noreferrer"className='icon' alt="Instagram" /></a>
            </div>
          </div>

          <div className="right-contact">
            <div className='form'>
              <div className="form-bg">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  placeholder='Enter your name'
                  onChange={changeHandler}
                />
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  placeholder='Enter your email'
                  onChange={changeHandler}
                />
                <textarea
                  className='txtArea'
                  name="message"
                  value={formData.message}
                  placeholder='Enter your message'
                  onChange={changeHandler}
                ></textarea>
              </div>
              <div className="contactIcon">
                <div className="contactIconLeft">
                  <img className='one' src={smile} alt="Happy" />
                  <img className='two' src={sad} alt="Sad" />
                </div>
                <div className="ContactIconRight">
                  <button className='sendBtn' onClick={sendFeedback}>
                    <img src={send} alt="Send" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
