import React, {useEffect, useState, useRef} from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import * as M from '@mui/material/';
import Carousel from '../Components/Carousel'; 
import Get_Popular from '../TMDB/Get_Popular';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function PopularCarousel() {
    const [loaded, setLoaded] = useState(false);
    const [popular, setPopular] = useState([]);
    const [primary, setPrimary] = useState(); 
    const [secondary, setSecondary] = useState();
    
    useEffect(() => {
        
        Get_Popular(1)
        .then((result) =>{
            setPopular(result.results)

        })
        .catch((err) =>{
            console.log(err)
        })


    },[]);

    useEffect(() => {
        if(popular.length){
            buildPrimary(); 
            buildSecondary();
            setLoaded(true);

        }


    }, [popular])




    //POSTER
    const buildPrimary = () =>{
        let temp = []; 
        popular.map((item, index) =>{
            
            temp.push(<div><img src={'https://www.themoviedb.org/t/p/w500'+item.poster_path}></img></div>)

        })
        setPrimary(temp); 
    }


    //POSTER 
    const buildSecondary = () =>{
        let temp = []; 
        popular.map((item, index) =>{
            temp.push(
                <div>
                    <h1>{item.title}</h1>
                    <h4>Release Date: {item.release_date}</h4>
                    <h3>{item.overview}</h3>
                    <h3 sx={{cursor:'pointer'}} onClick={()=> window.location = '/content/film/' + String(item.id)}> See More  <ArrowForwardIcon /> </h3> 
                    
                    
                </div>
            )
        })
        setSecondary(temp); 
    }



    return (
        <div >
                <h1 style={{marginLeft:25,color:'white'}}> Popular Movies </h1>
                {loaded ? 
                <Carousel 
                    childWidth={500}
                    height={750}
                    primary={primary}
                    secondary={secondary}
                /> : null}
            
        </div>
    )
}

export default PopularCarousel
