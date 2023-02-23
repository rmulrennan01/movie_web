import React, {useEffect} from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import './Background.css';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";



function Background() {
    const data = useSelector((state)=> state.tmdb.primary)
    const {scrollYProgress} = useScroll();
    const y = useTransform(scrollYProgress, [0,1],[0,600] )
 


    return (
       <motion.div style={{y:y}}>
            <img className='background' src={'https://image.tmdb.org/t/p/w780'+ data.poster_path}></img>
        </motion.div>
        
    )
}

export default Background
