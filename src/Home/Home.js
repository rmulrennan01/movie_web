import React, {useEffect, useState} from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import * as M from '@mui/material/';
import Carousel from '../Components/Carousel'; 
import Get_Popular from '../TMDB/Get_Popular';


function Home() {
    const [loaded, setLoaded] = useState(false);
    const [popular, setPopular] = useState([]);
    const [primary, setPrimary] = useState(); 
    const [secondary, setSecondary] = useState();
    const [posters, setPosters] = useState([]); 



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
            buildPosterUrls();
            buildPrimary(); 
            buildSecondary();
            setLoaded(true);

        }
        
 

    }, [popular])


    const buildPosterUrls = () =>{
        let tempList = []; 
        popular.map( (item, index) => {
            tempList.push('https://www.themoviedb.org/t/p/w500'+item.poster_path)
        })
        setPosters(tempList); 
        console.log(tempList);
    }

    //posters
    const buildPrimary = () =>{
        let temp = []; 
        popular.map((item, index) =>{
            
            temp.push(<div><img src={'https://www.themoviedb.org/t/p/w500'+item.poster_path}></img></div>)

        })
        setPrimary(temp); 
    }

    const buildSecondary = () =>{
        let temp = []; 
        popular.map((item, index) =>{
            temp.push(
                <div>
                    <h1>{item.title}</h1>
                    <h4>Release Date: {item.release_date}</h4>
                    <h3>{item.overview}</h3>
                    <h3> See More </h3>
                    
                </div>
            )
        })
        setSecondary(temp); 
    }


    
    //PRIMARY
    //SECONDARY


    return (
        <div className='home'>
            <Navbar />
            <br></br>
            <br></br>
            
            {loaded ? 
                <Carousel 
                    childWidth={500}
                    primary={primary}
                    secondary={secondary}
                /> : null}

            <br></br>
            <br></br>
            <br></br>

     
            
        </div>
    )
}

export default Home
