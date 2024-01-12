import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2EzMDMwNDA1ZmE3MjE5MTg3YThjZmJmMzQ2OTZiNCIsInN1YiI6IjY1OWU5YzU0OTU5MGUzMDIwMTM3OTg3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q8ZIn2wvoXHyxWOhwS8DRzu8NLIcA7ad-BJsgX8YwJU';

export const getTrendings = async () => {
    const { data } = await axios.get('/trending/movie/day', {
    });
    return data.results;
}

export const getMovieDetails = async (id) => {
    const { data } = await axios.get(`/movie/${id}`, {
    });
    return data;
}

export const getMovieCast = async (id) => {
    const { data } = await axios.get(`/movie/${id}/credits`, {
    });
    return data.cast;
}

export const getMovieReviews = async (id) => {
    const { data } = await axios.get(`/movie/${id}/reviews`, {
    });
    return data.results;
}

export const searchMovies = async (search) => {
    const { data } = await axios.get(`/search/movie?`, { params: { query: search } });
    return data.results;
}