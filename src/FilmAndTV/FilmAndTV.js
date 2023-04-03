import React, {useState,useEffect,useRef} from 'react'
import './FilmAndTV.css';
import * as M from '@mui/material/';
import Get_Movie from '../TMDB/Get_Movie'
import Get_Video from '../TMDB/Get_Video'
import Get_Similar from '../TMDB/Get_Similar'
import {useParams} from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Trailer from './Trailer.js';
import Get_Images from '../TMDB/Get_Images';
import Get_Cast from '../TMDB/Get_Cast'; 
import Genres from './Genres.js';
import Similar from './Similar';
import Cast from './Cast.js'; 


function FilmAndTV() {
    const {id} = useParams(); 
    const {type} = useParams(); 
    const [content,setContent] = useState([]);
    const [videos,setVideos] = useState(['test']);
    const [images, setImages] = useState([]);
    const [cast, setCast] = useState([]); 
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
            Get_Images('movie',id)
            .then((res2) =>{
                setImages(res2);
                Get_Cast('movie', id)
                .then((res3) =>{
                    setCast(res3); 
                    setLoaded(true); 
        
                })
                .catch((err) =>{
                    console.log(err)
                })
            })
            .catch((err) =>{
                console.log(err)
            })
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
                <h3 className='filmAndTV__title'> Runtime: {content.runtime} minutes</h3>
                <h3 className='filmAndTV__title'> User Score: {content.vote_average} out of 10</h3>
                <h3 className='filmAndTV__title'> Genre: {content.genres.map((item) => <>{item.name}, </>)}</h3>
                <Genres genres={content.genres}/>

                {/*<div className='filmAndTV__row'> */}
                <M.Grid container sx={{height:'850px'}}>
                    <M.Grid item xs={12} sm={3}> 
                        <img  src={'https://www.themoviedb.org/t/p/w500'+content.poster_path} />

                    </M.Grid>
                    <M.Grid item xs={12} sm={9}> 
                        <Trailer videos={videos}/>

                    
                    </M.Grid>



                </M.Grid>
                 
           
                    
                {/*</div> */}
                <Cast cast={cast}/> 
                <div className='filmAndTV__row' >
                    <Similar type={type} id={id} />

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
