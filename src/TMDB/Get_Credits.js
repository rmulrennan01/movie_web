//FETCHES A LIST OF ALL MOVIES THAT THE INDIVIDUAL AS BEEN CREDITED IN
const Get_Credits = async (person_id) => {
    // https://api.themoviedb.org/3/person/{person_id}/movie_credits?api_key=<<api_key>>&language=en-US
    let data = await fetch('https://api.themoviedb.org/3/person/' + person_id + '/movie_credits?api_key=' + process.env.REACT_APP_TMDB_API_KEY);
    let credits = await data.json();
    return credits; 
}

export default Get_Credits