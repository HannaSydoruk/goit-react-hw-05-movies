import { getTrendings } from 'api';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import css from './home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function loadTrendings() {
      try {
        const data = await getTrendings();
        setTrendingMovies(_ => data);
      } catch {}
    }
    loadTrendings();
  }, []);

  return (
    <>
      <div>Trending movies</div>
      <ul className={css.movielist}>
        {trendingMovies?.map(trendingMovie => (
          <li key={trendingMovie.id}>
            <Link to={`/movies/${trendingMovie.id}`}>
              {trendingMovie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
