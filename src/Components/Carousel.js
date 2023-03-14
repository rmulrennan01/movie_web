import React, {useEffect, useState, useRef} from 'react'
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import * as M from '@mui/material/';
import * as Icons from '@mui/icons-material/';
import './Carousel.css';

//PROPS -> ARRAY OF COMPONENTS

function Carousel(props) {
    const [offset, setOffset] = useState(0)
    const [spacing, setSpacing] = useState(Number(25)); 
    const [childPositions, setChildPositions] = useState([]);
    const [children, setChildren] = useState([]); 
    const [loaded, setLoaded] = useState(true); 
    const childRefs = useRef([]); 
    const [hoverIndex, setHoverIndex] = useState(null); 
    const startPos =((props.childWidth * props.primary.length) + ((props.primary.length-1) * spacing))/2;

  

    useEffect(() =>{
       


        setChildren(props.primary)
        buildPositions();

        setLoaded(true);
    }, []);


    const buildPositions = () =>{
        let temp = []
        let total = Number(0)
        for (let i = 0; i<props.primary.length; i++){
      
                temp.push(Number(props.childWidth)*i + spacing*i - startPos )
            
        }
        setChildPositions(temp);
    }

    const buildChildren = (item, index) =>{
        
        return(
           
            <motion.div className='carousel__child'   
                initial={{ x: childPositions[index]}}
                animate={{x:childPositions[index]+offset, y: 0}} 
                transition={{  stiffness: 600, type: "spring", damping: 60, mass: 3}}
                ref={ref => childRefs.current.push(ref)} 
                key={index+'carousel_child'}
                onHoverStart={()=>setHoverIndex(index)}
                onHoverEnd={()=>setHoverIndex(null)}
            >
                
                {item}
                {hoverIndex == index ? 
                    
                        <motion.div initial={{opacity:0}} animate={{opacity:1}} className='carousel__child__info'>{props.secondary[index] }</motion.div>
                       
                   
                    :
                    null

                }
                This
            </motion.div>
          
        )
    }
    




  return (
    <div className='carousel' >
        <button className='carousel__btn__left' onClick={()=>setOffset(offset+900)}> 
            <Icons.ArrowBackIos  sx={{color:'white', scale:'250%'}}/> 
        </button>

        <button className='carousel__btn__right' onClick={()=>setOffset(offset-900)}> 
            <Icons.ArrowForwardIos  sx={{color:'white', scale:'250%'}}/> 
        </button>
        <motion.div  > 
    
            {loaded ? children.map(buildChildren) : null}
            

        </motion.div>



    </div>

  )
}

export default Carousel