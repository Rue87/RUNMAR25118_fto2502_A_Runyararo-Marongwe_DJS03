import React, { Component } from 'react';
import '../App.css'; 
import { genres } from '../data/data.js'; // Import genres data
import { formatDate } from '../utils/dateUtils.js';
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
 * @param {string} props.podcast.updated - ISO string for the last updated date.
 *
 * @returns {JSX.Element} A card displaying the podcast's image, title, seasons, and genres.
 */


class PodcastCard extends Component {
  render() {
   // Destructuring podcast props
    const { image, title, seasons, genres: genreIds, updated } = this.props.podcast;

   // Mapping genre IDs to genre titles
    const genreTitles = genreIds
      ? genreIds.map(id => {
          const genre = genres.find(g => g.id === id);
          return genre ? genre.title : 'Unknown';
        })
      : [];

    return (
      <div className="podcast-card">
        <img
          src={image}
          alt={title}
          className="podcast-image"

          // Fallback image if source fails to load
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x300?text=No+Image';
          }}
        />
        <h3 className="podcast-title">{title}</h3>
        <p className="podcast-seasons">
          {seasons ? `${seasons} season${seasons > 1 ? 's' : ''}` : 'Season info not available'}
        </p>
        <div className="podcast-genres">
          {genreTitles.length > 0 ? (
            genreTitles.map((genre, index) => (
              <span key={index} className="genre-badge">{genre}</span>
            ))
          ) : (
            'No genres found'
          )}
        </div>
        {updated && (
          <small className="podcast-updated">Last updated: {formatDate(updated)}</small>
        )}
      </div>
    );
  }
}

export default PodcastCard;
