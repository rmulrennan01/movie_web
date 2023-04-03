import React, {useState, useEffect} from 'react'
import ReactPlayer from 'react-player'

import "./FilmAndTV.css";

import {Media, Video } from '@vidstack/player-react';

function Trailer(props) {
    const [url, setUrl] = useState(null); 
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        selectTrailer();

    }, [])

    const selectTrailer = () =>{
        let temp = {};
        for(let i = 0; i<props.videos.length; i++){
            temp = props.videos[i]
            console.log(temp);
            if(temp.type.toLowerCase() == 'teaser' || temp.type.toLowerCase =='trailer'){
                if(temp.official){
                    setUrl("https://www.youtube.com/watch?v=" + temp.key);
                    setLoaded(true);
                    break;
                }
            }

            
        }
        if (url ===null){
            setUrl("https://www.youtube.com/watch?v=" + props.videos[0].key); 
        }

    }

    const player = () =>{
        return(
                <ReactPlayer 
                    className='react-player'
                    url={url} 
                    playing={true}
                    muted={true}
                    controls={true}
                    width='100%'
                    height='100%'
                
                />
        )
    }

    const player2 = () =>{
        return(
            <Media>
                <Video loading="visible" poster="https://media-files.vidstack.io/poster.png" controls preload="true">
                    <iframe id="ytplayer" type="text/html" width="640" height="360"
                        src={url}
                        frameborder="0"></iframe>                
                </Video>
            </Media>
        )


    }





    return (
        <>
            {loaded ? player() : null}
        </>
    )
}

export default Trailer
