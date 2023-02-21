import React, {useState, useEffect} from 'react';
import * as M from '@mui/material/';
import * as Icons from '@mui/icons-material/';
import './Tile.css';
import Get_Movie from '../TMDB/Get_Movie'

import { motion } from "framer-motion";
import CurrencyFormat from 'react-currency-format';


function Tile() {
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        Get_Movie(16869)
        .then((result) =>{
            setData(result);
            setLoaded(true);
        })
        .catch((err) =>{
            console.log(err)
        })

    }, [])
 

    const TileBack = () => {
        return(
 
            <div className='tile__back'>
                <h4>{data.title}</h4>
                <M.Accordion>
                    <M.AccordionSummary expandIcon={<Icons.ExpandMore/>}>
                        Synopsis
                    </M.AccordionSummary>
                    <M.AccordionDetails>
                        {data.overview}
                    </M.AccordionDetails>
                </M.Accordion>
                Runtime: {data.runtime} Minutes <br></br>
                Release Date: {data.release_date} <br></br>
                Budget: <CurrencyFormat value={data.budget} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} />
                <br></br>
                Revenue: <CurrencyFormat value={data.revenue} displayType={'text'} thousandSeparator={true} prefix={'$'} /> <br></br>
                <M.Button sx={{borderRadius:'25px', marginTop:'4px'}} variant='contained'> See Cast </M.Button>

            </div>
  
        );
    }
    
    const TileFront = () => {
        return(
   
        <div className="tile__front">
            <img className='tile__front__img' src={'https://image.tmdb.org/t/p/w300'+data.poster_path}></img>
        </div>
  
        );
    }




    return (
        <div  
            className='tile'
       
  
        >
            {loaded ? <TileFront /> : null }
            {loaded ? <TileBack /> : null}

            <br></br>
        </div>

            
            
     
    )
}

export default Tile
