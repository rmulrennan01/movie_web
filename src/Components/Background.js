import React, {useEffect} from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import './Background.css';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";



function Background() {
    const data = useSelector((state)=> state.tmdb.primary)
    const {scrollYProgress} = useScroll();
    const {scrollY} = useScroll();
    const y = useTransform(scrollY, [0,1800], [0,1800] )
    const opacity = useTransform(scrollY, [0,200], [1,0.55])


    return (
        <motion.div style={{y:y, opacity:opacity}} className='background' >
            <img src={'https://image.tmdb.org/t/p/w780'+ data.poster_path}></img>
        </motion.div>
        
    )
}

export default Background
