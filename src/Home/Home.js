import React, {useEffect, useState, useRef} from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import * as M from '@mui/material/';
import Carousel from '../Components/Carousel'; 
import Get_Popular from '../TMDB/Get_Popular';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PopularCarousel from './PopularCarousel'; 
import TrendingMovies from './TrendingMovies'; 

function Home() {



    return (
        <div className='home' >
            <Navbar />
            <br></br>
            <br></br>
            <PopularCarousel />
            <br></br>
            <TrendingMovies />
            
           
            
        </div>
    )
}

export default Home
