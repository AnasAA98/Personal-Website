import React from 'react';
import './Popup.css';
import PopupImage from '/Background-Photos/popup.png'; // Adjust the path as necessary

const Popup = ({ visible, content, onClose }) => {
  if (!visible) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <img src={PopupImage} alt="Popup" className="popup-image" />
        <div className="popup-text" dangerouslySetInnerHTML={{ __html: content }}></div>
        <button className="popup-close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
