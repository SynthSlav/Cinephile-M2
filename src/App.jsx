import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Watchlist from "./components/Watchlist";
import About from "./components/About";
import "./App.css";
import axios from "axios";
import { CSSTransition, SwitchTransition } from "react-transition-group";

export default function App() {
// API key for OMDB API
const apiKey = import.meta.env.VITE_OMDB_API_KEY;

// Stores list of movies fetched from the API based on search
const [movies, setMovies] = useState([]);

// Watchlist state: holds 'toWatch' and 'watched' arrays. Persisted in localStorage
const [watchlist, setWatchlist] = useState(() => {
  const saved = localStorage.getItem("watchlist");
  return saved ? JSON.parse(saved) : { toWatch: [], watched: [] };
});

// Tracks if an API request is loading
const [loading, setLoading] = useState(false);

// Stores any error messages during API calls
const [error, setError] = useState(null);

// Holds details of the currently selected movie
const [selectedMovie, setSelectedMovie] = useState(null);

// Tracks if movie details are being loaded
const [detailLoading, setDetailLoading] = useState(false);


  const homeRef = useRef(null); // Ref for Home route transition
  const watchlistRef = useRef(null); // Ref for Watchlist route transition
  const aboutRef = useRef(null); // Ref for About route transition

// This effect runs whenever the 'watchlist' state changes.
// It saves the current watchlist to localStorage to persist the user's watchlist across page reloads.
useEffect(() => {
  localStorage.setItem("watchlist", JSON.stringify(watchlist)); // Save 'watchlist' to localStorage
}, [watchlist]); // Dependency array: this effect runs when 'watchlist' changes.

// Function to handle movie search based on the user's search term.
const searchMovies = async (searchTerm) => {
  setSelectedMovie(null); // Reset any selected movie when starting a new search
  
  // Check if the search term is empty and show an error message if true
  if (!searchTerm) {
    setError("Please enter a search term");
    return;
  }

  setLoading(true); // Set loading state to true while making the API request
  setError(null); // Clear any previous errors

  try {
    // Make an API request to OMDB to fetch movies based on the search term
    // The API key is stored in an environment variable for security.
    // The search term is passed as a query parameter to the API.
    // The API returns a list of movies matching the search term.
    // The response is expected to be in JSON format.
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`
    );

    // If the API response is successful and movies are found
    if (response.data.Response === "True") {
      // Limit the search results to the first 10 movies
      setMovies(response.data.Search.slice(0, 10));
    } else {
      // If no results are found, display an error message
      setError("No results found");
      setMovies([]); // Clear the current movie list
    }
  } catch (error) {
    // If there's an error with the API request, display an error message
    setError("Failed to fetch movies. Please try again later.");
    setMovies([]); // Clear the current movie list
  } finally {
    // Set loading to false once the request is completed (success or failure)
    setLoading(false);
  }
};

// Function to fetch movie details based on the selected movie's IMDb ID
// This function is called when a movie card is clicked to view its details.
// It sets the 'detailLoading' state to true while fetching the details from the OMDB API.
// Upon successful fetch, the 'selectedMovie' state is updated with the movie data.
// If an error occurs during the request, an error message is set in the 'error' state.
// The API key is stored in an environment variable for security, and the API request uses axios for making the GET request.
const fetchMovieDetails = async (imdbID) => {
  setDetailLoading(true); // Set loading state to true when fetching details

  try {
    // Make API call to fetch the movie details based on the IMDb ID
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&plot=full`
    );
    // Update the 'selectedMovie' state with the fetched movie data
    setSelectedMovie(response.data);
  } catch (error) {
    // In case of error, set an error message
    setError("Failed to fetch movie details. Please try again later.");
  } finally {
    // Set loading state to false after the request finishes (whether success or failure)
    setDetailLoading(false);
  }
};

// Function to add a movie to the "To Watch" list in the watchlist state
// It checks if the movie already exists in the 'toWatch' list. If not, it adds the movie to the list.
const addToWatchlist = (movie) => {
  setWatchlist((prev) => ({
    ...prev,
    toWatch: prev.toWatch.some((m) => m.imdbID === movie.imdbID) // Check if the movie is already in the 'toWatch' list
      ? prev.toWatch // If it exists, do nothing
      : [...prev.toWatch, movie], // If not, add the movie to the 'toWatch' list
  }));
};

// Function to mark a movie as watched and move it from the 'toWatch' list to the 'watched' list
// It finds the movie in the 'toWatch' list and moves it to the 'watched' list.
// It removes the movie from the 'toWatch' list once it's marked as watched.
const markAsWatched = (imdbID) => {
  setWatchlist((prev) => {
    const movie = prev.toWatch.find((m) => m.imdbID === imdbID); // Find the movie in the 'toWatch' list
    return {
      toWatch: prev.toWatch.filter((m) => m.imdbID !== imdbID), // Remove the movie from the 'toWatch' list
      watched: movie ? [...prev.watched, movie] : prev.watched, // Add the movie to the 'watched' list if it was found
    };
  });
};

// Function to remove a movie from both the 'toWatch' and 'watched' lists
// It removes the movie based on its IMDb ID from both lists.
const removeFromWatchlist = (imdbID) => {
  setWatchlist((prev) => ({
    toWatch: prev.toWatch.filter((m) => m.imdbID !== imdbID), // Remove the movie from the 'toWatch' list
    watched: prev.watched.filter((m) => m.imdbID !== imdbID), // Remove the movie from the 'watched' list
  }));
};

  return (
    <BrowserRouter basename="/Cinephile-M2">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <div ref={homeRef} className="page-transition-container">
                <SwitchTransition mode="out-in">
                  <CSSTransition
                    key="home"
                    nodeRef={homeRef}
                    timeout={300}
                    classNames="fade"
                  >
                    <Home
                      movies={movies}
                      loading={loading}
                      error={error}
                      onSearch={searchMovies}
                      selectedMovie={selectedMovie}
                      fetchMovieDetails={fetchMovieDetails}
                      setSelectedMovie={setSelectedMovie}
                      detailLoading={detailLoading}
                      onBackToList={() => setSelectedMovie(null)}
                      onAddToWatchlist={addToWatchlist}
                    />
                  </CSSTransition>
                </SwitchTransition>
              </div>
            }
          />
          <Route
            path="watchlist"
            element={
              <div ref={watchlistRef} className="page-transition-container">
                <SwitchTransition mode="out-in">
                  <CSSTransition
                    key="watchlist"
                    nodeRef={watchlistRef}
                    timeout={300}
                    classNames="fade"
                  >
                    <Watchlist
                      watchlist={watchlist}
                      onRemove={removeFromWatchlist}
                      onMarkWatched={markAsWatched}
                      fetchMovieDetails={fetchMovieDetails}
                      selectedMovie={selectedMovie}
                      onBackToList={() => setSelectedMovie(null)}
                      detailLoading={detailLoading}
                    />
                  </CSSTransition>
                </SwitchTransition>
              </div>
            }
          />
          <Route
            path="about"
            element={
              <div ref={aboutRef} className="page-transition-container">
                <SwitchTransition mode="out-in">
                  <CSSTransition
                    key="about"
                    nodeRef={aboutRef}
                    timeout={300}
                    classNames="fade"
                  >
                    <About />
                  </CSSTransition>
                </SwitchTransition>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
