import React, {useEffect, useState} from 'react'
import './Port.css';
import Get_Individual from '../TMDB/Get_Individual';
import * as M from '@mui/material/';
import * as Icons from '@mui/icons-material/';

function Port(props) {
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        Get_Individual(props.id)
        .then((result) =>{
            setData(result);
            setLoaded(true);
        })
        .catch((err) =>{
            console.log(err)
        })

    }, [])


    const Face = () =>{

        return(
            <div className='port__front'>
                <img className='port__front__img' src={'https://image.tmdb.org/t/p/w300'+data.profile_path}></img>            </div>
        )
    }

    const Back = () =>{

        return(
            <div className='port__back'>
                <h5>{data.name}</h5>
                Birthday: {data.birthday}
                <M.Button sx={{borderRadius:'25px', marginTop:'4px'}} variant='contained'> Connections </M.Button>
                <M.Button sx={{borderRadius:'25px', marginTop:'4px'}} variant='contained'> Credits </M.Button>

            </div>
        )
    }



    return (
        <div className='port'>
            {loaded ? <Face/> : null}
            {loaded ? <Back /> : null}
            
        </div>
    )
}

export default Port
