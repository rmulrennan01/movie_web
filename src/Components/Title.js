import React, {useRef} from 'react';
import * as M from '@mui/material/';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import './Title.css';
import { useSelector, useDispatch, Provider } from 'react-redux';


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
    
     

   return (

        <motion.div className='title' ref={ref} style={{opacity:x, y:y}} >
            {data.title.toUpperCase()}
        </motion.div>
    )


}

export default Title
