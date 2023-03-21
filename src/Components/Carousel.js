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

    const width =((props.childWidth * props.primary.length) + ((props.primary.length-1) * spacing));


    const containerRef = useRef(null); 


    useEffect(() =>{
       

        setChildren(props.primary)
        buildPositions();

        setLoaded(true);
    }, []);


    const buildPositions = () =>{
        let temp = []
        let total = Number(0)
        for (let i = 0; i<props.primary.length; i++){
      
            temp.push(Number(props.childWidth)*i + spacing*i - width/2);
            
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
            </motion.div>
          
        )
    }



    const handleClick = (forward) =>{
        let lastChild = childPositions[props.primary.length-1]+offset;
        console.log('last child pos: ', lastChild, 'window width: ', window.innerWidth, 'offset: ', offset); 
        let contWidth = window.innerWidth; 
       
        if(forward){
            //SHIFT CHILDREN TO THE LEFT PROPORTIONALLY TO THE WIDTH OF THE WINDOW
            if(lastChild  > window.innerWidth  - props.childWidth/2  ){
                //setOffset(offset-(props.childWidth*2+spacing))
                setOffset(offset-contWidth/2.5)
            }
            else{
                //setOffset(-1*(window.innerWidth*2 + props.childWidth + spacing));
                //setOffset((containerRef.current.clientWidth)*-1 + width/2)
                setOffset((contWidth-width)+width/2 - spacing)
                
            }
            
        }


        else{
            //SHIFT CHILDREN TO THE RIGHT PROPORTIONALLY TO THE WIDTH OF THE WINDOW
            if(offset <= width/2 - props.childWidth){
                //setOffset(offset+window.innerWidth/2.5);
                setOffset(offset + contWidth/2.5);
                
                

            }
            //STOPS CAROUSEL FROM MOVING BEYOND THE LAST CHILD OBJECTION
            else{
                setOffset(width/2+spacing);
            }

        }

    }
    




  return (
    <div className='carousel' ref={containerRef} style={{height:props.height }}>
        {console.log('ref :', containerRef.current)}
        {console.log('width: ', width)}
        {console.log('window width', window.innerWidth)}
        {containerRef.current ? console.log('parent width: ', containerRef.current.clientWidth) : null}
    

        
        <button className='carousel__btn__left' onClick={()=>handleClick(false)}> 
            <Icons.ArrowBackIos  sx={{color:'white', scale:'250%'}}/> 
        </button>

        <button className='carousel__btn__right' onClick={()=>handleClick(true)}> 
            <Icons.ArrowForwardIos  sx={{color:'white', scale:'250%'}}/> 
        </button>
        <motion.div  > 
    
            {loaded ? children.map(buildChildren) : null}
            

        </motion.div>

    </div>

  )
}

export default Carousel