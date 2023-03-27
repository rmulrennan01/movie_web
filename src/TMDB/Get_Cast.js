

//FETCHES A LIST OF ALL PEOPLE CREDITED IN THE MOVIE
const Get_Cast = async (type, movie_id) => {
    const data = await fetch(`https://api.themoviedb.org/3/${type.toLowerCase()}/${movie_id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)

    //const data = await fetch(' https://api.themoviedb.org/3/movie/'+movie_id+'/credits?api_key='+process.env.REACT_APP_TMDB_API_KEY)
    const credit_list = await data.json(); 
    return credit_list; 

}

export default Get_Cast