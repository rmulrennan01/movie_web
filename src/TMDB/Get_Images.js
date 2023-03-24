
//GETS link to images for Movie or TV
// https://api.themoviedb.org/3/tv/{tv_id}/images?api_key=<<api_key>>&language=en-US
//https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US

const Get_Images = async (type, id) => {
    let data = await fetch(`https://api.themoviedb.org/3/${type.toLowerCase()}/${id}/images?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
    let video = await data.json();
    return video; 


}

export default Get_Images

