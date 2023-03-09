import React, {useEffect, useState} from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import * as M from '@mui/material/';
import Carousel from '../Components/Carousel'; 
import Get_Popular from '../TMDB/Get_Popular';


function Home() {
    const [loaded, setLoaded] = useState(false);
    const [popular, setPopular] = useState([]);
    const [posters, setPosters] = useState([]); 



    useEffect(() => {
        Get_Popular()
        .then((result) =>{
            console.log(result);
            setPopular(result.results)
            buildPosterUrls();
            setLoaded(true); 
        })
        .catch((err) =>{
            console.log(err)
        })

    },[]);


    const buildPosterUrls = () =>{
        let tempList = []; 
        popular.map( (item, index) => {
            tempList.push('https://www.themoviedb.org/t/p/w500/'+item.poster_path)
        })
        setPosters(tempList); 


    }
    



    return (
        <div>
            <Navbar />
            you are home
            {loaded ? <Carousel content={posters} /> : null}
            
        </div>
    )
}

export default Home
