import React from 'react';
import './FilmAndTV.css'; 

function Cast(props) {

    const build_cast = (item, index) => {

        return(
            <div className='cast'>
                <div className='cast__img__container'>
                    <img className='cast__img' src={'https://image.tmdb.org/t/p/w300'+item.profile_path}></img>        
                </div>
                <div className='cast__names'>
                    <h3>{item.name}</h3>
                    <h4>{item.character}</h4> 
                </div>
            </div>


        )

    }



  return (
    <div >
        {props.cast.cast.map(build_cast)}
        <div className='cast__names'>
            <h4>See More</h4> 
        </div>
    </div>
  )
}

export default Cast