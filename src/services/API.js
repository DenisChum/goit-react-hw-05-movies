import axios from 'axios';

const API_KEY = '5787548457546c05a58e27934de5db16';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrending = async () => {
  try {
    const data = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchMovies = async query => {
  try {
    const data = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieDetails = async movieId => {
  try {
    const data = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieСredits = async movieId => {
  try {
    const data = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieReviews = async movieId => {
  try {
    const data = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};