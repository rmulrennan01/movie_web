import React, {useRef} from 'react';
import * as M from '@mui/material/';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import './Title.css';
import { useSelector, useDispatch, Provider } from 'react-redux';


function Title() {
    const data = useSelector((state)=> state.tmdb.primary)

    const containerRef = useRef(null);
    //const { scrollYProgress } = useScroll();
    const {scrollY} = useScroll();
    //const y = useTransform(scrollYProgress, [0,600], [0,600]);
    //const x = useTransform(scrollYProgress, [0,600], [0,600]);
    const y = useTransform(scrollY, [0,600], [0,600]);
    const x = useTransform(scrollY, [0,600], ['-100%','100%']);
    const ref = useRef();

    return (
        <motion.div ref={ref} style={{x:x, y:y}} className='title'>

            <div className='title__text'>
                {data.title}
            </div>
            {console.log(ref.current)}
        </motion.div>
    )
}

export default Title
