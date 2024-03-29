import React, { useEffect, useState } from 'react';
import { searchMovies } from 'api';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';

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
      <SearchForm onSubmitHandler={onSubmitHandler} />

      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default Movies;
