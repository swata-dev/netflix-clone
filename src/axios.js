import axios from 'axios';

// create a base URL request of TMDB
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
