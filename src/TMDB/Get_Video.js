
//GETS link to videos for Movie or TV
//https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
const Get_Video = async (type, id) => {
    let data = await fetch(`https://api.themoviedb.org/3/${type.toLowerCase()}/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
    let video = await data.json();
    return video; 


}

export default Get_Video

