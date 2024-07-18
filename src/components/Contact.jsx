import React from 'react';
import './Contact.css';
import BackgroundImage from '/Background-Photos/Clouds.png'; 
import Contactmelogo from '/Icons/Contactmelogo.png'; 
import LinkedInIcon from '/Icons/LinkedIn.png'; 
import EmailIcon from '/Icons/Email-icon.png'; 
import GitHubIcon from '/Icons/Github-icon.png'; 
import ResumeIcon from '/Icons/Resume-icon.png'; 

function Contact() {
  return (
    <div className="background">
      <img src={BackgroundImage} alt="Background" className="background-image" />
      <div className="content">
        <img src={Contactmelogo} alt="Contactmelogo" className="Contactmelogo" />
        <div className="icon-container">
          <a href="https://www.linkedin.com/in/mohamed-anas-aaffoute-5b54382ab/" target="_blank" rel="noopener noreferrer"><img src={LinkedInIcon} alt="LinkedIn" className="icon" /></a>
          <a href="mailto:aaffouteanas@gmail.com"><img src={EmailIcon} alt="Email" className="icon" /></a>
          <a href="https://github.com/AnasAA98" target="_blank" rel="noopener noreferrer"><img src={GitHubIcon} alt="GitHub" className="icon" /></a>
          <a href="https://anas-aa-resume.tiiny.site/" target="_blank" rel="noopener noreferrer"><img src={ResumeIcon} alt="Resume" className="icon" /></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
