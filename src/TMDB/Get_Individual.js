//FETCHES DATA FOR AN INDIVIDUAL
const Get_Individual = async (person_id) => {
    let data = await fetch('https://api.themoviedb.org/3/person/' + person_id  + '?api_key=' +process.env.REACT_APP_TMDB_API_KEY);
    let person = await data.json();
    return person; 
}

export default Get_Individual