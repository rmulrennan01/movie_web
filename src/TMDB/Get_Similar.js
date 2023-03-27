

// https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=<<api_key>>&language=en-US&page=1
//GETS SIMILAR CONTENT BASED ON THE CONTENT ID


const Get_Similar = async (type, id) => {
    let data = await fetch(`https://api.themoviedb.org/3/${type.toLowerCase()}/${id}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`);
    let similar = await data.json();

    
    return similar; 


}

export default Get_Similar

