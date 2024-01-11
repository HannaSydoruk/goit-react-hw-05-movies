import React, { useEffect, useState } from 'react';
import { getMovieDetails } from 'api';
import { NavLink, Routes, Route, useParams } from 'react-router-dom';
import Cast from './cast';
import Reviews from './reviews';

const MovieDetails = () => {
  const [movieDetais, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function loadMovieDetails(id) {
      const data = await getMovieDetails(id);
      setMovieDetails(data);
    }
    loadMovieDetails(movieId);
  }, [movieId]);

  return (
    <>
      <h3>Movie Details</h3>
      {movieDetais && (
        <>
          <img
            src={`http://image.tmdb.org/t/p/w185${movieDetais.poster_path}`}
            alt=""
          />
          <h2>Title: {movieDetais.title}</h2>
          <p>Overview: {movieDetais.overview}</p>
          <p>Popularity: {Math.round(movieDetais.vote_average * 10)}%</p>
          <div>
            Genres:
            {movieDetais.genres.map(genre => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </div>
          <h3>Additional info:</h3>

          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
          <div>
            <Routes>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Routes>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;
