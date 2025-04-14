import {React, useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Watchlist from './components/Watchlist'
import About from './components/About' 
import './App.css'
import axios from 'axios'

export default function App() {
  // States for the Api calls
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovies = async (searchTerm) => {
    if (!searchTerm) {
      setError('Please enter a search term');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${searchTerm}`
      );

      if (response.data.Response === 'True') {
        setMovies(response.data.Search.slice(0, 10));
      }else {
        setError('No results found');
        setMovies([]);
      }
    } catch (error) {
      setError('Failed to fetch movies. Please try again later.');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    // Router for the pages
    <>
      <BrowserRouter basename='/Cinephile-M2'>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home 
            movies={movies}
            loading={loading}
            error={error}
            onSearch={searchMovies}
            />} />
            <Route path='watchlist' element={<Watchlist />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

