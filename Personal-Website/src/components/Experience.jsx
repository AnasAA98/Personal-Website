import React, { useState } from 'react';
import './Experience.css';
import BackgroundImage from '/Background-Photos/Green-Apocalypse.png'; // Adjust the path as necessary
import HeadstarterIcon from '/Icons/Headstarter-icon.jpg'; // Adjust the path as necessary
import CunyTechPrepIcon from '/Icons/CTP-icon.png';
import LoadingIcon from '/Icons/Loading.png';
import ExperienceLogo from '/Icons/Experience.png'; 
import HeadstarterLabel from '/Icons/Headstarter-Fellowship.png';
import CunyTechPrepLabel from '/Icons/CUNY-Tech-Prep.png';
import Popup from './Popup';

function Experience() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  const handleIconClick = (content) => {
    setPopupContent(content);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setPopupContent('');
  };

  return (
    <div className="background">
      <img src={BackgroundImage} alt="Background" className="background-image" />
      <div className="experience-content">
        <img src={ExperienceLogo} alt="Experience Logo" className="experience-logo" />
        <div className="icon-wrapper">
          <div className="experience-icon-item" onClick={() => handleIconClick('I am currently in the Headstarter Summer Fellowship, a 7-week intensive program designed to bridge academic learning and real-world software engineering. Each week involves coaching calls, project drops, interview prep, networking, and team skill-building. The program includes building AI projects, hackathons, and a final project tailored to specific goals. This fellowship enhances my technical skills, builds my personal brand, and expands my professional network, preparing me for a successful career in software engineering.<br><br><a href="https://headstarter.co/" target="_blank">https://headstarter.co/</a>')}>
            <img src={HeadstarterIcon} alt="Headstarter Fellowship" className="experience-icon" />
            <img src={HeadstarterLabel} alt="Headstarter Fellowship Label" className="experience-icon-label" />
          </div>
          <div className="experience-icon-item" onClick={() => handleIconClick('I am currently in the CUNY Tech Prep program, a year-long intensive designed to bridge academic learning with real-world software development. Throughout the program, I engage in technical workshops, industry exposure, professional development sessions, and collaborative projects. With a focus on mastering in-demand technologies and honing soft skills, CTP connects students to tech jobs in NYC. The program comprehensive approach enhances my technical expertise, builds my professional brand, and expands my network, preparing me for a successful career in technology.<br><br><a href="https://cunytechprep.org/" target="_blank">https://cunytechprep.org/</a>')}>
            <img src={CunyTechPrepIcon} alt="CUNY Tech Prep" className="experience-icon" />
            <img src={CunyTechPrepLabel} alt="CUNY Tech Prep Label" className="experience-icon-label" />
          </div>
          <div className="experience-icon-item-loading">
            <img src={LoadingIcon} alt="Loading" className="experience-icon-loading" />
          </div>
        </div>
      </div>

      <Popup visible={popupVisible} content={popupContent} onClose={handleClosePopup} />
    </div>
  );
}

export default Experience;
