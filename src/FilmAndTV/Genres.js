import React from 'react';
import * as M from '@mui/material/';
import './FilmAndTV.css'; 


function Genres(props) {
    const buildIcons = (item,index) => {

        return(
            <div className='genre__btn' key={index+"genre"}>
                {item.name}
            </div>
        )
    }
    


  return (
    <div className="genres">
        {props.genres.map(buildIcons)}
    </div>
  )
}

export default Genres