import { getMovieReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function loadReviews() {
      const data = await getMovieReviews(movieId);
      setReviews(data);
    }
    loadReviews();
  }, [movieId]);

  return (
    <>
      <h3>Reviews</h3>
      {reviews.length > 0 && (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {!reviews.length && <p>We don't have any reviews for this movie</p>}
    </>
  );
};
export default Reviews;
