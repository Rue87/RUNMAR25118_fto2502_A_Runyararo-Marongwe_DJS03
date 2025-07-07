import React from 'react';
import '../App.css'; 
import { genres } from '../data/data.js'; // Import genres data

/**
 * PodcastCard component renders an individual podcast's preview card.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.podcast - The podcast data object.
 * @param {string} props.podcast.image - URL of the podcast image.
 * @param {string} props.podcast.title - Title of the podcast.
 * @param {number} props.podcast.seasons - Number of seasons.
 * @param {Array<number>} props.podcast.genres - List of genre IDs.
 *
 * @returns {JSX.Element} A card displaying the podcast's image, title, seasons, and genres.
 */
const PodcastCard = ({ podcast }) => {
  // Map genre IDs to their corresponding titles
  const genreTitles = podcast.genres
    ? podcast.genres.map(id => {
        const genre = genres.find(g => g.id === id);
         return genre ? genre.title : 'Unknown';
      })
    : [];
  return (
    <div className="podcast-card">
      <img
        src={podcast.image}
        alt={podcast.title}
        className="podcast-image"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x300?text=No+Image'
; 
        }}
      />
      <h3 className="podcast-title">{podcast.title}</h3>
      <p className="podcast-seasons">
        {podcast.seasons ? `${podcast.seasons} season${podcast.seasons > 1 ? 's' : ''}`:'Season info not available'}
      </p>
       <div className="podcast-genres">
        {genreTitles.length > 0 ? genreTitles.join(', ') : 'No genres found'}
      </div>
    </div>
  );
};

export default PodcastCard;