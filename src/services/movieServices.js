const key = import.meta.env.REACT_APP_TMDB_KEY;
const baseUrl = "https://api.themoviedb.org/3";
REACT_APP_TMDB_KEY="95a6f403a2fb9ba787881e6b280497d1";
const endpoints = {
    popular : `${baseUrl}https://api.themoviedb.org/3`,
    topRated : `${baseUrl}/movie/top_rated?api_key=${key}`,
    trending : `${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=2`,
    comedy : `${baseUrl}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
    upcoming : `${baseUrl}/movie/upcoming?api_key=${key}`, 
};

export default endpoints;