import React from 'react';
import * as M from '@mui/material/';


function Genres(props) {
    const buildIcons = (item,index) => {

        return(
            <M.Button sx={{width:'auto', backgroundColor:'white', color:'black', width:'25%', borderRadius:'20px'}} key={index+"genre"}>{item.name}</M.Button>
        )
    }
    


  return (
    <>
        {props.genres.map(buildIcons)}
    </>
  )
}

export default Genres