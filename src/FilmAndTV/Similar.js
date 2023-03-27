



import React, {useEffect, useState, useRef} from 'react';
import Navbar from '../Navbar/Navbar';
import * as M from '@mui/material/';
import Carousel from '../Components/Carousel'; 
import Get_Similar from '../TMDB/Get_Similar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Similar(props) {
    const [loaded, setLoaded] = useState(false);
    const [content, setContent] = useState([]);
    const [primary, setPrimary] = useState(); 
    const [secondary, setSecondary] = useState();
    
    useEffect(() => {
        
        Get_Similar(props.type, props.id)
        .then((result) =>{
            setContent(result.results)
            

        })
        .catch((err) =>{
            console.log(err)
        })


    },[]);

    
    useEffect(() => {
        if(content.length){
            buildPrimary(); 
            buildSecondary();
            setLoaded(true);
            console.log('complete'); 

        }


    }, [content])
    




    //POSTER
    const buildPrimary = () =>{
        let temp = []; 
        content.map((item, index) =>{
            
            temp.push(<div key={'primary'+index}><img src={'https://www.themoviedb.org/t/p/w500'+item.poster_path}></img></div>)

        })
        setPrimary(temp); 
    }


    //POSTER 
    const buildSecondary = () =>{
        let temp = []; 
        content.map((item, index) =>{
            temp.push(
                <div key={'secondary'+index}>
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
        <div style={{width:'100%'}}>
                <h1 style={{marginLeft:25,color:'white'}}> Related Content  </h1>
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

export default Similar
