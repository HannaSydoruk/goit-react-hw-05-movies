import { getMovieCast } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

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
                src={
                  cast.profile_path
                    ? `http://image.tmdb.org/t/p/w92${cast.profile_path}`
                    : defaultImg
                }
                alt=""
                width={180}
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
