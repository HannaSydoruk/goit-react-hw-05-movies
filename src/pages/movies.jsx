import React, { useEffect, useState } from 'react';
import { searchMovies } from 'api';
import { NavLink, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;

    async function findhMovies() {
      const data = await searchMovies(query);
      setMovies(data);
    }
    findhMovies();
  }, [searchParams]);

  const onSubmitHandler = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.searchValue.value });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="searchValue"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">search</button>
      </form>

      {movies.length > 0 && (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Movies;
