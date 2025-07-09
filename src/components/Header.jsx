import React from 'react';
import profileImage from '../assets/profile.png'; 
import '../App.css'
function Header() {
  return (
    <header className="header">
      <span className="podcast-icon">🎙️</span>
      <h1 className="header-title">Podcast Discovery</h1>
      <div className="spacer"></div>
      <span className="icon-button">🔍</span>
      <img 
       src={profileImage} alt="User Profile" className="profile" />

    </header>
  );
}

export default Header;

