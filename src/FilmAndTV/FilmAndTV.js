import React, {useState,useEffect,useRef} from 'react'
import './FilmAndTV.css';
import * as M from '@mui/material/';
import Get_Movie from '../TMDB/Get_Movie'
import Get_Video from '../TMDB/Get_Video'
import {useParams} from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Trailer from './Trailer.js';

function FilmAndTV() {
    const {id} = useParams(); 
    const [content,setContent] = useState([]);
    const [videos,setVideos] = useState([]);
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

    useEffect(() => {
        
        Get_Movie(id)
        .then((result) =>{
            setContent(result);

        })
        .catch((err) =>{
            console.log(err)
        })
    },[]);

    useEffect(() => {
        
        Get_Video('movie',id)
        .then((result) =>{
            setVideos(result.results);
            setLoaded(true);


        })
        .catch((err) =>{
            console.log(err)
        })
    },[content]);


  


    const display = () =>{
        console.log('ran')
        return(
            
            <div  className='filmAndTV'>
                <h1 className='filmAndTV__title'> {content.title} </h1>

                <div className='filmAndTV__row'>
                 
                        <img  className='filmAndTV__poster' src={'https://www.themoviedb.org/t/p/w500'+content.poster_path} />
                  
                 
                 
                    
                        <Trailer videos={videos}/>
                   

                </div>


            </div>
            

        )
    }

    //budget, homepage, original_language, overview (summary), release_date, poster_path, genre, runtime, tagline

    return (
        <>
            {loaded ? display() : <></>}
        </>
            
    )
}

export default FilmAndTV