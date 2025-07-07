import { useState, useEffect } from 'react';
import PodcastCard from './components/PodcastCard.jsx';
import './App.css';
import Loader from './components/Loader'; 
/**
 * Main App component that fetches podcast data on load.
 * @component
 * @returns {JSX.Element} The rendered component.
 */

function App () {
 //state to store fetched podcast data
  const [podcasts, setPodcasts] = useState([]);
 // State to track if data is currently loading
   const [isLoading, setIsLoading] = useState(true);

  // State to track if an error occurred during fetch
  const [hasError, setHasError] = useState(false);
  
  /*
   * useEffect hook runs once after the component mounts.
   * It fetches podcast data from the API.
   */

useEffect(() => {
    fetch('https://podcast-api.netlify.app/shows') // Calls the API endpoint
    .then(res => {
        if (!res.ok) throw new Error('Network response failed');
        return res.json();
  })

    .then(data => {
        setPodcasts(data);      // Save data in state
        setIsLoading(false);    // Loading finished
        console.log(data[0]);
      })

      .catch(error => {
        console.error('Error fetching podcasts:', error);
        setHasError(true);      // Mark that an error happened
        setIsLoading(false);    // Loading finished even if error
      });
  }, []);

  if (isLoading) {
    // Show loading message while fetching
    //return <div className="loading">Loading podcasts...</div>
    return <Loader />;
  }

  if (hasError) {
    // Show error message if fetch failed
    return <div className="error">Sorry, there was a problem loading podcasts.</div>
  }

  if (podcasts.length === 0) {
  return <div className="empty">No podcasts found.</div>;
}

  // Render podcasts list once data is loaded and no errors
  return (
    <>
      <h1>Podcast Discovery</h1>
      <div className="podcast-grid">

        {podcasts.map(podcast => (
           <PodcastCard key={podcast.id} podcast={podcast} />
         ))}
          </div>
          </>
        );
    
}

export default App;
     