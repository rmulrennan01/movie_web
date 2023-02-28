import React, {useEffect, useRef, useState} from 'react';

import './FilmPage.css';
import Tile from './Tile.js'; 
import Port from './Port.js';
import Background from './Background';
import Section from './Section.js';
import { useSelector, useDispatch, Provider } from 'react-redux'
import {setPrimary} from '../Services/tmdbSlice'
import Title from './Title';
import Synopsis from './Synopsis'; 
import Get_Movie from '../TMDB/Get_Movie'

import { motion, useScroll, useTransform, useSpring } from "framer-motion";


function FilmPage() {
  const ref = useRef(null);
  // const { scrollYProgress } = useScroll({ target: ref });
  const { scrollYProgress } = useScroll() ;
  const y = useTransform(scrollYProgress, [0,1], [0,600]);
  const x = useTransform(scrollYProgress, [0,1], [0,600]);
  const [loaded, setLoaded] = useState(false);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const dispatch = useDispatch();


  useEffect(() => {
    Get_Movie(16869)
    .then((result) =>{
        dispatch(setPrimary(result));
        setLoaded(true);
    })
    .catch((err) =>{
        console.log(err)
    })

  }, [])



  return (

      <div className="filmPage">
        <motion.div className="progress-bar" style={{ scaleX }} />
        {loaded ? <Background/> : null} 
        
        {loaded ? <Title /> : null}
        {loaded ? <Synopsis /> : null}
          
        
  
        <div>


        </div>

      </div>
  );
}

export default FilmPage;
