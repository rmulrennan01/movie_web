import React, {useEffect, useState, useRef} from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import * as M from '@mui/material/';
import Carousel from '../Components/Carousel'; 
import Get_Trending from '../TMDB/Get_Trending';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function TrendingTV() {
    const [loaded, setLoaded] = useState(false);
    const [popular, setPopular] = useState([]);
    const [primary, setPrimary] = useState(); 
    const [secondary, setSecondary] = useState();
    
    useEffect(() => {
        
        Get_Trending('tv','week',1)
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
                <div key={index+'tv_secondary'}>
                    <h1>{item.name}</h1>
                    <h4>Release Date: {item.first_air_date}</h4>
                    <h3>{item.overview}</h3>
                    <h3 sx={{cursor:'pointer'}} onClick={()=> window.location = '/content/tv/' + String(item.id)}> See More  <ArrowForwardIcon /> </h3> 
                    
                    
                </div>
            )
        })
        setSecondary(temp); 
    }



    return (
        <div >
                <h1 style={{marginLeft:25,color:'white'}}> This Week's Trending TV Shows </h1>
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

export default TrendingTV
