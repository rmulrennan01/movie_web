
//QUERY FOR MOVIES, TV, & ACTORS

//MOVIE:  https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
//TV:  https://api.themoviedb.org/3/search/tv?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
//PEAPLE:  https://api.themoviedb.org/3/search/person?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
//EXAMPLE: https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher


const Search = async (query, signal) => {

    //TODO SPLIT BY SPACES
    let films = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`, {signal})
    
    //let data = await fetch("https://api.themoviedb.org/3/search/movie?api_key=" + process.env.REACT_APP_TMDB_API_KEY + "&" + query)
    let results_1 = await films.json();

    /*
    let tv = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`)
    let results_2 = await tv.json();
    */

    return results_1


}

export default Search

