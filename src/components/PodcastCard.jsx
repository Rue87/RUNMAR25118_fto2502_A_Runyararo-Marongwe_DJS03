import React from 'react';
import '../App.css'; 
import { genres } from '../data';

/**
 * PodcastCard component displays a podcast image and title.
 * If the image fails to load, it shows a fallback placeholder.
 */
const PodcastCard = ({ podcast }) => {
  return (
    <div className="podcast-card">
      <img
        src={podcast.image}
        alt={podcast.title}
        className="podcast-image"
        onError={(e) => {
          e.target.src = 'https://podcast-api.netlify.app/shows'; 
        }}
      />
      <h3 className="podcast-title">{podcast.title}</h3>
      <p className="podcast-seasons">
        {podcast.seasons ? `${podcast.seasons} season${podcast.seasons> 1 ? 's' : ''}`:'Season info not available'}
      </p>
    </div>
  );
};

export default PodcastCard;