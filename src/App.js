import React, {useEffect, useRef, useState} from 'react';

import logo from './logo.svg';
import './App.css';
import Tile from './Components/Tile.js'; 
import Port from './Components/Port.js';
import Background from './Components/Background';
import Section from './Components/Section.js';
import { useSelector, useDispatch, Provider } from 'react-redux'
import {setPrimary} from './Services/tmdbSlice'
import Title from './Components/Title';
import Get_Movie from './TMDB/Get_Movie'

import { motion, useScroll, useTransform, useSpring } from "framer-motion";


function App() {
  const ref = useRef(null);
  // const { scrollYProgress } = useScroll({ target: ref });
  const { scrollYProgress } = useScroll() ;
  const y = useTransform(scrollYProgress, [0,1], [0,600]);
  const x = useTransform(scrollYProgress, [0,1], [0,600]);
  const [loaded, setLoaded] = useState(false);

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

      <div className="App">
        {loaded ? <Background/> : null}
        {loaded ? <Title /> : null}
          
        
  
        <div>


        </div>

      </div>
  );
}

export default App;
