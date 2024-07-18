import React, { useState } from 'react';
import './Experience.css';
import BackgroundImage from '/Background-Photos/Brown-Apocalypse .png'; // Adjust the path as necessary
import TicTacToeLogoIcon from '/Icons/tic-tac-toe-pixel-logo.png'; // Adjust the path as necessary
import MoveNYCLogoIcon from '/Icons/MoveNYC-logo-icon.png';
import LoadingIcon from '/Icons/Working-on-more.png';
import ProjetcsLogo from '/Icons/Projetcs.png'; 
import TicTacToeLabel from '/Icons/Tic-Tac-Toe-React.png';
import MoveNYCLabel from '/Icons/Move-NYC.png';
import Popup from './Popup';

function Projects() {
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
        <img src={ProjetcsLogo} alt="Experience Logo" className="experience-logo" />
        <div className="icon-wrapper">
        <div className="experience-icon-item" onClick={() => handleIconClick('React Tic Tac Toe is a game developed using HTML, CSS, and JSX. It features a classic Tic Tac Toe game with a modern interface. Players take turns marking X and O on a 3x3 grid, aiming to align three symbols. The game updates in real-time, providing instant feedback. Built with React, it uses component-based architecture to manage game state and render the board. This project demonstrates skills in front-end development and interactive web applications.<br><br><a href="https://react-tic-tac-toe-three-red.vercel.app/" target="_blank" style="font-size: 0.9em;">https://react-tic-tac-toe-three-red.vercel.app/</a>')}>
        <img src={TicTacToeLogoIcon} alt="Headstarter Fellowship" className="experience-icon" />
            <img src={TicTacToeLabel} alt="Headstarter Fellowship Label" className="experience-icon-label" />
          </div>
          <div className="experience-icon-item" onClick={() => handleIconClick('Move NYC! Get Healthy, Get Connected, Get Move NYC! is a dynamic fitness app developed during HackCUNY 2024 at the City University of New York. This app engages users with an interactive frontend, encouraging socialization and healthy activities. Technologies used include HTML5/CSS3/JavaScript, REACT, GPT-3.5 Turbo, Python Flask, Google Firebase, FireStore, Auth, and Maps API. Skills applied: software engineering, database management, AI, NLP, collaboration, time management, SCRUM, and agile development.<br><br><a href="https://github.com/floresloyd/hackcuny24-app" target="_blank" style="font-size: 0.9em;">https://github.com/floresloyd/hackcuny24-app</a>')}>
          <img src={MoveNYCLogoIcon} alt="CUNY Tech Prep" className="experience-icon" />
            <img src={MoveNYCLabel} alt="CUNY Tech Prep Label" className="experience-icon-label" />
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

export default Projects;
