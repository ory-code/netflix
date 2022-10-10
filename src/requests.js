const API_KEY = process.env.REACT_APP_TMDBKEY



const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=fr-FR`,
    fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&language=fr-FR&sort_by=popularity.desc&with_networks=213&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    // fetchTopRated: `/3/movie/top_rated?api_key=${API_KEY}&language=fr-FR`,
    fetchActionMovie: `/discover/movie?api_key=${API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=28&with_watch_monetization_types=flatrate`,
    fetchComedieMovie: `/discover/movie?api_key=${API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=35&with_watch_monetization_types=flatrate`,
    fetchRomanceMovie: `/discover/movie?api_key=${API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=80&with_watch_monetization_types=flatrate`,
    fetchWarMovie: `/discover/movie?api_key=${API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=10752&with_watch_monetization_types=flatrate`,
    fetchDocumentarieMovie: `/discover/movie?api_key=${API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=99&with_watch_monetization_types=flatrate`,
}



 export default requests;