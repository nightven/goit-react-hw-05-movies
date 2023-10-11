import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
// // const TRENDS_URL = 'https://api.themoviedb.org/3/trending/all/day';
// const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';
// const DETAILS_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '05fecd37f4938abe676372f3977174d8';
axios.defaults.params = {
  api_key: API_KEY,
};

function getMoviesInTrends() {
  return axios(`${BASE_URL}/trending/all/day`);
}

function getMoviesForQuery(query, page) {
  return axios(`${BASE_URL}/search/movie?query=${query}&page=${page}`);
}

function getMovieDetails(moviesId) {
  return axios(`${BASE_URL}/movie/${moviesId}`);
}

function getMovieCredits(moviesId) {
  return axios(`${BASE_URL}/movie/${moviesId}/credits`);
}
function getMovieReviews(moviesId) {
  return axios(`${BASE_URL}/movie/${moviesId}/reviews`);
}

export {
  getMoviesInTrends,
  getMoviesForQuery,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
