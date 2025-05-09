// App.jsx
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
  // Environment variable for API key
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  // State variables
  // movies: Array of movies fetched from the API
  const [movies, setMovies] = useState([]);
  // watchlist: Object containing two arrays: toWatch and watched
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem("watchlist");
    return saved ? JSON.parse(saved) : { toWatch: [], watched: [] };
  });
  // loading: Boolean indicating if data is being fetched
  const [loading, setLoading] = useState(false);
  // error: String containing error message if any
  const [error, setError] = useState(null);
  // selectedMovie: Object containing details of the selected movie
  const [selectedMovie, setSelectedMovie] = useState(null);
  // detailLoading: Boolean indicating if movie details are being fetched
  const [detailLoading, setDetailLoading] = useState(false);
 
  // Refs for page transitions
  // homeRef: Ref for the home page
  const homeRef = useRef(null);
  // watchlistRef: Ref for the watchlist page
  const watchlistRef = useRef(null);
  // aboutRef: Ref for the about page
  const aboutRef = useRef(null);

  // Effect to save watchlist to local storage whenever it changes
  // This ensures that the watchlist persists even after a page refresh
  // and is available when the app is reopened
  // This is done by converting the watchlist object to a JSON string
  // and saving it to local storage under the key "watchlist"
  // The useEffect hook is triggered whenever the watchlist state changes
  // and the updated watchlist is saved to local storage
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  // Function to search for movies based on a search term
  // It takes a search term as an argument and sets the selectedMovie to null
  // It checks if the search term is empty and sets an error message if it is
  // It sets the loading state to true and resets the error state
  // It makes a GET request to the OMDB API with the search term
  // If the response is successful, it updates the movies state with the search results
  // If the response is unsuccessful, it sets an error message and clears the movies state
  // Finally, it sets the loading state to false
  // The function also handles any errors that occur during the API request
  // and sets an error message if the request fails
  const searchMovies = async (searchTerm) => {
    setSelectedMovie(null);
    if (!searchTerm) {
      setError("Please enter a search term");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`
      );
      if (response.data.Response === "True") {
        setMovies(response.data.Search.slice(0, 10));
      } else {
        setError("No results found");
        setMovies([]);
      }
    } catch (error) {
      setError("Failed to fetch movies. Please try again later.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch movie details based on the IMDb ID
  // It takes an IMDb ID as an argument and sets the detailLoading state to true
  // It makes a GET request to the OMDB API with the IMDb ID
  // If the response is successful, it updates the selectedMovie state with the movie details
  // If the response is unsuccessful, it sets an error message
  // Finally, it sets the detailLoading state to false
  // The function also handles any errors that occur during the API request
  // and sets an error message if the request fails
  const fetchMovieDetails = async (imdbID) => {
    setDetailLoading(true);
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&plot=full`
      );
      setSelectedMovie(response.data);
    } catch (error) {
      setError("Failed to fetch movie details. Please try again later.");
    } finally {
      setDetailLoading(false);
    }
  };

  // Function to add a movie to the watchlist
  // It takes a movie object as an argument and updates the watchlist state
  // It checks if the movie is already in the watchlist and adds it if not
  // It updates the toWatch array in the watchlist state
  // The function also handles the case where the movie is already in the watchlist
  // and does not add it again
  // The function uses the setWatchlist function to update the state
  // It takes the previous state as an argument and returns a new state object
  // The new state object contains the previous toWatch array and adds the new movie
  // if it is not already present  
  const addToWatchlist = (movie) => {
    setWatchlist((prev) => ({
      ...prev,
      toWatch: prev.toWatch.some((m) => m.imdbID === movie.imdbID)
        ? prev.toWatch
        : [...prev.toWatch, movie],
    }));
  };

  // Function to mark a movie as watched
  // It takes an IMDb ID as an argument and updates the watchlist state
  // It checks if the movie is in the toWatch array and moves it to the watched array
  // It filters the toWatch array to remove the movie and adds it to the watched array
  const markAsWatched = (imdbID) => {
    setWatchlist((prev) => {
      const movie = prev.toWatch.find((m) => m.imdbID === imdbID);
      return {
        toWatch: prev.toWatch.filter((m) => m.imdbID !== imdbID),
        watched: movie ? [...prev.watched, movie] : prev.watched,
      };
    });
  };

  // Function to remove a movie from the watchlist
  // It takes an IMDb ID as an argument and updates the watchlist state
  // It filters both the toWatch and watched arrays to remove the movie
  // It uses the setWatchlist function to update the state
  // It takes the previous state as an argument and returns a new state object
  // The new state object contains the previous toWatch and watched arrays
  // and removes the movie from both arrays
  const removeFromWatchlist = (imdbID) => {
    setWatchlist((prev) => ({
      toWatch: prev.toWatch.filter((m) => m.imdbID !== imdbID),
      watched: prev.watched.filter((m) => m.imdbID !== imdbID),
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
                      setSelectedMovie={setSelectedMovie}
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