import React, {useEffect, useState} from 'react'
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import * as M from '@mui/material/';
import * as Icons from '@mui/icons-material/';
import './Carousel.css';

//PROPS -> ARRAY OF COMPONENTS

function Carousel(props) {
    const [position, setPosition] = useState([0])
    const [spacing, setSpacing] = useState(props.spacing)

    const { scrollYProgress } = useScroll() ;
    const y = useTransform(scrollYProgress, [0,1], [0,600]);
    const x = useTransform(scrollYProgress, [0,1], [0,600]);

    useEffect(() =>{



    }, []);


    const buildPositions = () =>{


    }
    

    const buildItems = (item,index) => {

        return(
            <div className='carousel__child'>
                {item.name}
            </div>
        )
    }



  return (
    <div>
        <button className='carousel__btn__left' onClick={()=>setPosition(position-400)}> 
            <Icons.ArrowBackIos  sx={{color:'red', scale:'250%', position}}/> 
        </button>

        <button className='carousel__btn__right' onClick={()=>setPosition(position+400)}> 
            <Icons.ArrowForwardIos  sx={{color:'red', scale:'250%'}}/> 
        </button>
        <motion.div className='carousel__row' animate={{x:position}} > 
    
            {props.children}

        </motion.div>



    </div>

  )
}

export default Carousel