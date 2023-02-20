import React, {useState} from 'react';
import * as M from '@mui/material/';
import * as Icons from '@mui/icons-material/';
import './Tile.css';

import { motion } from "framer-motion";



function Tile() {
    const style = {
        hidden: {transform: 'rotateY(180deg)'},
        show: {transform: 'rotateY(0deg)'}

    }
    const [flip, setFlip] = useState(true);
    const [frontStyle, setFrontStyle] = useState(style.show)
    const [backStyle, setBackStyle] = useState(style.hidden)

  

    const TileBack = () => {
        return(
 
            <motion.div className='tile__back'
            animate={backStyle}
            transition={{ ease: "easeOut", duration: 2 }}
            >
            <M.Accordion>
                <M.AccordionSummary
                    expandIcon={<Icons.ExpandMore/>}
                >
                    See details

                </M.AccordionSummary>
                <M.AccordionDetails>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    
                </M.AccordionDetails>
            </M.Accordion>
            <M.Button onClick={()=>flipToggle()} >Front</M.Button>

            </motion.div>
  
        );
    }
    
    const TileFront = () => {
        return(
   
        <motion.div className="tile__front" 
        animate={frontStyle}
        transition={{ ease: "easeOut", duration: 2 }}
        >
           Stuff
            <br></br>
            <M.Button onClick={()=>flipToggle()} >Back</M.Button>
        </motion.div>
  
        );
    }


    const flipToggle = () =>{
        if(flip){
            setFrontStyle(style.show);
            setBackStyle(style.hidden);

        }
        else {
            setFrontStyle(style.hidden)
            setBackStyle(style.show)
        }
        setFlip(!flip);


    }



    return (
        <motion.div  
            className='tile'
  
        >
            <TileFront />
            <TileBack />
            {console.log(flip)}
        </motion.div>

            
            
     
    )
}

export default Tile
