import React from 'react';
import BackgroundImage from '/Background-Photos/City.png'; // Adjust the path as necessary
import './MySkills.css';
import MySkillsLogo from '/Icons/My-Skills.png'; 
import Icon1 from '/Icons/HTML-pixel-logo.png'; // Adjust the paths as necessary
import Icon2 from '/Icons/React-pixel-logo.png';
import Icon3 from '/Icons/CSS-pixel-logo.png';
import Icon4 from '/Icons/Python-pixel-logo.png';
import Icon5 from '/Icons/SQL-pixel-logo.png';

function MySkills() {
  return (
    <div className="background">
      <img src={BackgroundImage} alt="Background" className="background-image" />
      <div className="content">
        <img src={MySkillsLogo} alt="My-Skills Logo" className="myskills-logo" />
        <div className="skill-icon-containers">
          <img src={Icon1} alt="Icon1" className="skill-icon" />
          <img src={Icon2} alt="Icon2" className="skill-icon" />
          <img src={Icon3} alt="Icon3" className="skill-icon" />
          <img src={Icon4} alt="Icon4" className="skill-icon" />
          <img src={Icon5} alt="Icon5" className="skill-icon" />
        </div>
      </div>
    </div>
  );
}

export default MySkills;