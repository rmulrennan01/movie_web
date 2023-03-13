import React, {useEffect, useState, useRef} from 'react'
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import * as M from '@mui/material/';
import * as Icons from '@mui/icons-material/';
import './Carousel.css';

//PROPS -> ARRAY OF COMPONENTS

function Carousel(props) {
    const [position, setPosition] = useState([0])
    const [spacing, setSpacing] = useState(Number(12)); 
    const [children, setChildren] = useState([]); 
    const [loaded, setLoaded] = useState(true); 
    const childRefs = useRef([]); 

    const { scrollYProgress } = useScroll() ;
    const y = useTransform(scrollYProgress, [0,1], [0,600]);
    const x = useTransform(scrollYProgress, [0,1], [0,600]);

    useEffect(() =>{
        setChildren([...props.children])
        setLoaded(true);


    }, []);


    const buildChildren = (item, index) =>{

        return(
            <motion.div ref={(item)=>childRefs.current.push(item)} key={index+'carousel_child'}>
                {item}
            </motion.div>

        )


    }
    




  return (
    <div>
        <button className='carousel__btn__left' onClick={()=>setPosition(position-400)}> 
            <Icons.ArrowBackIos  sx={{color:'white', scale:'250%', position}}/> 
        </button>

        <button className='carousel__btn__right' onClick={()=>setPosition(position+400)}> 
            <Icons.ArrowForwardIos  sx={{color:'white', scale:'250%'}}/> 
        </button>
        <motion.div className='carousel__row' animate={{x:position}} > 
    
            {loaded ? children.map(buildChildren) : null}
            

        </motion.div>



    </div>

  )
}

export default Carousel