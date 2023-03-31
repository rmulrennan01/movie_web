import React, {useState, useEffect} from 'react'
import ReactPlayer from 'react-player'
import "./FilmAndTV.css";

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
            <div className='player-wrapper'>
                <ReactPlayer 
                    className='react-player'
                    url={url} 
                    playing={true}
                    muted={true}
                    controls={true}
                    width='100%'
                    height='100%'
                
                />

            </div>

        )
    }

    const player2 = () =>{
        <div className='player-wrapper2'>
            <video width="100%" height="100%" controls>
                <source src={url} />
            </video>

        </div>


    }





    return (
        <>
            {loaded ? player() : null}
        </>
    )
}

export default Trailer
