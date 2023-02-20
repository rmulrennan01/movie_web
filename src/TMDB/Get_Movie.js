
//GETS DATA FOR AN INDIVIDUAL MOVIE

const Get_Movie = async (movie_id) => {
    let data = await fetch('https://api.themoviedb.org/3/movie/'+movie_id+'?api_key='+process.env.REACT_APP_TMDB_API_KEY);
    let movie = await data.json();
    return movie; 


}

export default Get_Movie

