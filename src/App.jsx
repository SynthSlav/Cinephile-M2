import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import './App.css'

export default function App() {

  return (
    <>
      <BrowserRouter basename='/Cinephile-M2'>
        <Routes>
          <Route path="/" element={<Layout />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

