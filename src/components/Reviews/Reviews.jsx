import { getMovieReviews } from 'api/api';
import ReviewsItem from 'components/ReviewsItem/ReviewsItem';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsWrap } from './Reviews.styled';

const Reviews = () => {
  const [filmReviews, setFilmReviews] = useState('');
  const { movieId } = useParams();
  useEffect(() => {
    const getReviewById = async () => {
      try {
        const reviews = await getMovieReviews(movieId);
        setFilmReviews(reviews.data.results);
       
      } catch (error) {
        console.log(error.massage);
      }
    };

    getReviewById();
  }, [movieId]);
  return (
    <ReviewsWrap>
      {filmReviews.length ? (
        <ul>
          {filmReviews.map(({ author, content, id }) => (
            <li key={id}>
              <ReviewsItem author={author} content={content} />
            </li>
          ))}
        </ul>
      ):(<div>We don't have any reviews for this movie.</div>)}
    </ReviewsWrap>
  );
};
export default Reviews;
