import React, {useEffect, useState} from 'react'
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import * as M from '@mui/material/';
import * as Icons from '@mui/icons-material/';


//PROPS -> ARRAY OF COMPONENTS

function Carousel(props) {
    const [position, setPosition] = useState([])
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
    <div className='carousel' > 
        <M.Button startIcon={<Icons.ArrowBackIos  sx={{color:'white', scale:'250%'}}/>}> </M.Button>
        {props.content.map(buildItems)}
        <M.Button startIcon={<Icons.ArrowForwardIos  sx={{color:'white', scale:'250%'}}/>}> </M.Button>

    </div>
  )
}

export default Carousel