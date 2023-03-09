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
            setPopular(result.results)

        })
        .catch((err) =>{
            console.log(err)
        })

    },[]);

    useEffect(() => {
        if(popular.length){
            buildPosterUrls();
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
    



    return (
        <div>
            <Navbar />
            
            {loaded ? <Carousel content={posters}>{posters.map((item)=><img src={item}></img>)} </Carousel> : null}
            
        </div>
    )
}

export default Home
