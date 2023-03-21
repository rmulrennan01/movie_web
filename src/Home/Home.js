import React, {useEffect, useState, useRef} from 'react';
import './Home.css';

import * as M from '@mui/material/';

import PopularCarousel from './PopularCarousel'; 
import TrendingMovies from './TrendingMovies'; 
import TrendingTV from './TrendingTV'; 
import TrendingPeople from './TrendingPeople';

function Home() {



    return (
        <div className='home' >

   

            <div style={{scale:'0.90'}}>

                < PopularCarousel />

            </div>
            <div style={{scale:'0.90'}}>

                < TrendingMovies />

            </div>
            <div style={{scale:'0.90'}}>

                < TrendingTV />

            </div>
            <div style={{scale:'0.90'}}>

                < TrendingPeople />

            </div>
  
            
           
            
        </div>
    )
}

export default Home
