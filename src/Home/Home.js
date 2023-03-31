import React, {useEffect, useState, useRef} from 'react';
import './Home.css';

import * as M from '@mui/material/';

import PopularCarousel from './PopularCarousel'; 
import TrendingMovies from './TrendingMovies'; 
import TrendingTV from './TrendingTV'; 
import TrendingPeople from './TrendingPeople';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

function Home() {

//                initial={{ x: childPositions[index]}}
//animate={{x:childPositions[index]+offset, y: 0}} 

    return (
        <div className='home' >

   

            <motion.div style={{height:'750px'}} initial={{opacity:0}} animate={{opacity:1}}>

                < PopularCarousel />

            </motion.div>
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
