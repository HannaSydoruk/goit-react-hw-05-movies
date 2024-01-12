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
      <h3>Cast</h3>
      <ul>
        {casts.map(cast => {
          return (
            <li key={cast.id} style={{ listStyle: 'none' }}>
              <div
                style={{
                  display: 'flex',
                  gap: '20px',
                  paddingBottom: '20px',
                }}
              >
                <img
                  src={
                    cast.profile_path
                      ? `http://image.tmdb.org/t/p/w92${cast.profile_path}`
                      : defaultImg
                  }
                  alt=""
                  width={120}
                />
                <div>
                  <p>{cast.name}</p>
                  <p>Character: {cast.character}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Cast;
