const API_KEY = '84210bef81b607d159e49122690c68a9';

export const requests = {
  fetchTrending: '/trending/all/week?api_key=${API_KEY}&language=en_us',
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/discover/tv?api_key=${API_KEY}&language=en-us`,
  fetchActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentMovies: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};
