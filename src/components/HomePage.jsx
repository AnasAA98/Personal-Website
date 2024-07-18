import React from 'react';
import './Homepage.css';
import BackgroundImage from '/Background-Photos/Campfire.png'; // Adjust the path as necessary
import CharacterImage from '/Icons/Anas-character.png'; // Adjust the path as necessary
import BubbleImage from '/Icons/Bubble-text.png'; // Adjust the path as necessary

function HomePage() {
  return (
    <div className="background">
      <img src={BackgroundImage} alt="Background" className="background-image" />
      <img src={CharacterImage} alt="Character" className="character-image" />
      <div className="bubble-container">
        <img src={BubbleImage} alt="Speech Bubble" className="bubble-image" />
        <div className="bubble-text">
          Hi! Glad you made it! My name is Mohamed Anas Aaffoute and I am a computer science student and an aspiring software engineer. This is my portfolio. Take a look around!!
        </div>
      </div>
    </div>
  );
}

export default HomePage;
