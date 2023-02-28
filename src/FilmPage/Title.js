import React, {useRef} from 'react';
import * as M from '@mui/material/';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import './Title.css';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { Block } from '@mui/icons-material';


function Title() {
    const data = useSelector((state)=> state.tmdb.primary)
    const ref = useRef();

    const containerRef = useRef(null);
    const {scrollY} = useScroll();
    const {scrollYProgress} = useScroll();


    const y = useTransform(scrollY, [0,600], [0,600]);
    const x = useTransform(scrollY, [0,300, 600], [0.85,1,0]);
    const springX = useSpring(x, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      });
    const springY = useSpring(scrollY, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
      

    const Letter_Animation = (letter, index) => {
        if(letter == ' '){
            return(
                <div>
                    {console.log('found space')}
                <br></br>
                <br></br>
                </div>
                )
        }
        return(
        <motion.span
            className='title__letters'
            initial={{ y: '200%', opacity:0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
                delay: 0.25+0.25*index,
                duration: 4 }}
        >
            {letter}


        </motion.span>
        );



    }

   return (

        <motion.div 
            className='title' 
            ref={ref} 
            style={{opacity:x}} 
            initial={{ x: '100%', opacity:0 }}
            animate={{ x: '0%', opacity: 1 }}
            transition={{
                delay: 1,
                duration: 1,
                ease:'easeIn',
            }}
        >
            {[...data.title.toUpperCase()].map(Letter_Animation)}
        </motion.div>
    )


}

export default Title
