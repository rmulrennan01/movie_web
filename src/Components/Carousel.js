import React, {useEffect, useState, useRef} from 'react'
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import * as M from '@mui/material/';
import * as Icons from '@mui/icons-material/';
import './Carousel.css';

//PROPS -> ARRAY OF COMPONENTS

function Carousel(props) {
    const [offset, setOffset] = useState([0])
    const [spacing, setSpacing] = useState(Number(40)); 
    const [childPositions, setChildPositions] = useState([]);
    const [children, setChildren] = useState([]); 
    const [loaded, setLoaded] = useState(true); 
    const childRefs = useRef([]); 

  

    useEffect(() =>{

        setChildren([...props.children])
        buildPositions();

        setLoaded(true);
    }, []);


    const buildPositions = () =>{
        let temp = []
        let total = Number(0)
        for (let i = 0; i<props.children.length; i++){
            if(i==0){
                temp.push(Number(0));
            }
            else{
                temp.push(Number(props.width)*i + spacing*i)
            }
        }
        setChildPositions(temp);
        console.log('ran', temp); 
        //TODO
    }

    const buildChildren = (item, index) =>{
        
        console.log('item', item )
        return(
            <motion.div className='carousel__child'   
                initial={{ x: childPositions[index]}}
                animate={{x:childPositions[index]+offset, y: 0}} 
                transition={{  stiffness: 600, type: "spring", damping: 60, mass: 3}}
                ref={ref => childRefs.current.push(ref)} 
                key={index+'carousel_child'}
            >
                {item}
            </motion.div>
        )
    }
    




  return (
    <div>
        <button className='carousel__btn__left' onClick={()=>setOffset(offset+900)}> 
            <Icons.ArrowBackIos  sx={{color:'white', scale:'250%'}}/> 
        </button>

        <button className='carousel__btn__right' onClick={()=>setOffset(offset-900)}> 
            <Icons.ArrowForwardIos  sx={{color:'white', scale:'250%'}}/> 
        </button>
        <motion.div className='carousel__row'  > 
    
            {loaded ? children.map(buildChildren) : null}
            {loaded ? console.log('refs', childRefs.current) : null}
            {loaded ? console.log('children', props.children) : null}
            

        </motion.div>



    </div>

  )
}

export default Carousel