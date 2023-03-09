import React, {useEffect, useState} from 'react';
import './PortCollection.css'; 
import { useSelector, useDispatch, Provider } from 'react-redux';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import * as M from '@mui/material/';
import * as Icons from '@mui/icons-material/';
import Port from './Port'; 

import Get_Cast from '../TMDB/Get_Cast'; 


function PortCollection() {
    const [cast, setCast] = useState([]); 
    const [loaded, setLoaded] = useState(false); 
    const data = useSelector((state)=> state.tmdb.primary)

    const {scrollY} = useScroll();

    const x = useTransform(scrollY, [800,1200,1800], [0,1,0]);
    
    useEffect(() => {
        Get_Cast(data.id)
        .then((result) =>{
            setCast(result);
            setLoaded(true);
        })
        .catch((err) =>{
            console.log(err)
        })
    
      }, [])
      

    const build_ports = (item, index) =>{
        return (
            <Port clasName='portCollection__child' id={item.id} />

        )


    }

    return (
        <motion.div style={{opacity:x}} className='portCollection' >
            <M.Button startIcon={<Icons.ArrowBackIos  sx={{color:'white', scale:'250%'}}/>}> </M.Button>
            {loaded ? cast.map(build_ports) : null}
            <M.Button startIcon={<Icons.ArrowForwardIos  sx={{color:'white', scale:'250%'}}/>}> </M.Button>


            
        </motion.div>
    )
}

export default PortCollection