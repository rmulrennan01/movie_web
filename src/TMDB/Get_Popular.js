
//GETS DATA FOR POPULAR MOVIES


// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

const Get_Popular = async () => {
    //let data = await fetch('https://api.themoviedb.org/3/movie/'+movie_id+'?api_key='+process.env.REACT_APP_TMDB_API_KEY);
    let data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`);
    let movie = await data.json();
    return movie; 


}

export default Get_Popular

