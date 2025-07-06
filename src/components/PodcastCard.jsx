import React from 'react';
import 'App.css'; // optional, for card-specific styles

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
    </div>
  );
};

export default PodcastCard;