import React, {useEffect, useRef, useState} from 'react';
import {Routes, Route, BrowserRouter } from "react-router-dom";

import FilmAndTV from './FilmAndTV/FilmAndTV.js'; 
import FilmPage from './FilmPage/FilmPage';
import Home from './Home/Home'; 
import './App.css';
import Navbar from './Navbar/Navbar';


function App() {



  return (
    <BrowserRouter> 
      {console.log(process.env.REACT_APP_TMDB_API_KEY)}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/content/:type/:id' element={<FilmAndTV />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
