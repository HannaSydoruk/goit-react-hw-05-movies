import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { getMovieDetails } from 'api';
import {
  NavLink,
  Routes,
  Route,
  useParams,
  useLocation,
  Link,
} from 'react-router-dom';

const Cast = lazy(() => import('./cast'));
const Reviews = lazy(() => import('./reviews'));

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
        <Link to={backLinkRef.current}>&#8592; Go back</Link>
      </p>
      {movieDetais && (
        <>
          <div style={{ display: 'flex', gap: '20px' }}>
            <img
              src={
                movieDetais.poster_path
                  ? `http://image.tmdb.org/t/p/w185${movieDetais.poster_path}`
                  : defaultImg
              }
              width={240}
              alt=""
            />
            <div>
              <p>
                <span style={{ fontWeight: '600' }}>Title: </span>
                {movieDetais.title}
              </p>
              <p>
                <span style={{ fontWeight: '600' }}>Overview: </span>
                {movieDetais.overview}
              </p>
              <p>
                <span style={{ fontWeight: '600' }}>Popularity: </span>
                {Math.round(movieDetais.vote_average * 10)}%
              </p>
              <p>
                <span style={{ fontWeight: '600' }}>Genres: </span>
                {movieDetais.genres.map(genre => (
                  <span key={genre.id}>{genre.name} </span>
                ))}
              </p>
            </div>
          </div>
          <h3>Additional info:</h3>
          <ul style={{ listStyle: 'none' }}>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="cast" element={<Cast />}></Route>
                <Route path="reviews" element={<Reviews />}></Route>
              </Routes>
            </Suspense>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;
