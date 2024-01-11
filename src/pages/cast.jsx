import { getMovieCast } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function loadCasts() {
      const data = await getMovieCast(movieId);
      setCasts(data);
    }
    loadCasts();
  }, [movieId]);

  return (
    <>
      <h1>Cast</h1>
      <ul>
        {casts.map(cast => {
          return (
            <li key={cast.id}>
              <img
                src={`http://image.tmdb.org/t/p/w92${cast.profile_path}`}
                alt=""
              />
              <p>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Cast;
