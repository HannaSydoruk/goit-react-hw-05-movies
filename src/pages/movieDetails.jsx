import React, { useEffect, useRef, useState } from 'react';
import { getMovieDetails } from 'api';
import {
  NavLink,
  Routes,
  Route,
  useParams,
  useLocation,
  Link,
} from 'react-router-dom';
import Cast from './cast';
import Reviews from './reviews';

const MovieDetails = () => {
  const [movieDetais, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

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
      <p>
        <Link to={backLinkRef.current}>Go back</Link>
      </p>
      {movieDetais && (
        <>
          <img
            src={
              movieDetais.poster_path
                ? `http://image.tmdb.org/t/p/w185${movieDetais.poster_path}`
                : defaultImg
            }
            width={240}
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
