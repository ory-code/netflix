const API_KEY = process.env.REACT_APP_TMDBKEY



const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=fr-FR`,
    fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&language=fr-FR&sort_by=popularity.desc&with_networks=213&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    fetchTopRated: `/3/movie/top_rated?api_key=${API_KEY}&language=fr-FR`,
    fetchActionMovie: `/discover/movie?api_key=${API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=true&include_video=true&with_genres=28&with_watch_monetization_types=flatrate`,
    fetchComedieMovie: `/discover/movie?api_key=${API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=true&include_video=true&with_genres=35&with_watch_monetization_types=flatrate`,
    fetchRomanceMovie: `/discover/movie?api_key=${API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=true&include_video=true&with_genres=27&with_watch_monetization_types=flatrate`,
    fetchHorrorMovie: `/discover/movie?api_key=${API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=true&include_video=true&with_genres=10749&with_watch_monetization_types=flatrate`,
    fetchDocumentarieMovie: `/discover/movie?api_key=${API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=true&include_video=true&with_genres=99&with_watch_monetization_types=flatrate`,
}

 // https://api.themoviedb.org/3/tv/on_the_air?api_key=85ccb84ffaa2298160cbd68fc84e8a48&language=en-US


 export default requests;