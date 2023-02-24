
import React, {useRef} from 'react';
import * as M from '@mui/material/';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import './Synopsis.css';
import { useSelector, useDispatch, Provider } from 'react-redux';


function Synopsis() {
    const data = useSelector((state)=> state.tmdb.primary)

    const containerRef = useRef(null);
    //const { scrollYProgress } = useScroll();
    const {scrollY} = useScroll();
    //const y = useTransform(scrollYProgress, [0,600], [0,600]);
    //const x = useTransform(scrollYProgress, [0,600], [0,600]);
    const y = useTransform(scrollY, [600,1800], [150,1350]);
    const x = useTransform(scrollY, [600,1200,1800], [0,1,0]);
    //const x2 = useTransform(scrollY, [600,2200], [1,0]);
    //const x = x1+x2;
    const ref = useRef();

    return (
        <motion.div ref={ref} style={{opacity:x, y:y}} className='synopsis'>

            <div className='synopsis__text'>
                Plot Synopsis <br></br><br></br>
                {data.overview}
            </div>
            {console.log(ref.current)}
        </motion.div>
    )
}

export default Synopsis