import React, {useEffect, useRef, useState} from 'react';
import {Routes, Route, BrowserRouter } from "react-router-dom";

import FilmPage from './FilmPage/FilmPage';
import Home from './Home/Home'; 
import './App.css';
import Navbar from './Navbar/Navbar';


function App() {


  return (
    <BrowserRouter> 
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/film' element={<FilmPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
