import { getTrendings } from 'api';
import MovieList from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function loadTrendings() {
      try {
        const data = await getTrendings();
        setTrendingMovies(_ => data);
      } catch (error) {
        toast(error.message);
      }
    }
    loadTrendings();
  }, []);

  return (
    <>
      <h3>Trending movies</h3>
      <MovieList movies={trendingMovies} />
    </>
  );
};

export default Home;
