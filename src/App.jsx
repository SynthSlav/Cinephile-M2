import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Watchlist from './components/Watchlist'
import About from './components/About' 
import './App.css'

export default function App() {

  return (
    <>
      <BrowserRouter basename='/Cinephile-M2'>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='watchlist' element={<Watchlist />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

