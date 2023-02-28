import React, {useEffect} from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import './Background.css';
import { motion, useScroll, useTransform, useSpring, easeIn } from "framer-motion";



function Background() {
    const data = useSelector((state)=> state.tmdb.primary)
    const {scrollYProgress} = useScroll();
    const {scrollY} = useScroll();
    
    const opacity = useTransform(scrollYProgress, [0,.25], [1,0.5])

    return (
        <motion.div   
            initial={{ y: '100%', opacity:0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
                delay: 0.25,
                duration: 1 }}
            style={{opacity:opacity}} className='background' 
        >
            <img src={'https://image.tmdb.org/t/p/w780'+ data.poster_path}></img>
        </motion.div>
        
    )
}

export default Background
