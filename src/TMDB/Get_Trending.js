
//GETS DATA FOR WHAT'S TRENDING

//SPECIFY TYPE (STRING): ALL, MOVIE, TV, PERSON
//TIME (STRING): DAY OR WEEK

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

const Get_Trending = async (type, time, page) => {
     
    let data = await fetch(`https://api.themoviedb.org/3/trending/${type.toLowerCase()}/${time.toLowerCase()}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`)

    //let data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${page}`);
    let content = await data.json();

    
    return content; 


}

export default Get_Trending

