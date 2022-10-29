import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/API';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader';
import s from '../Reviews/Reviews.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      if (!movieId) {
        return;
      }
      setStatus(Status.PENDING);
      try {
        const { data } = await getMovieReviews(movieId);

        if (!data.results.length) {
          setStatus(Status.REJECTED);
          setReviews([]);
          return toast.warn('No reviews');
        } else {
          setStatus(Status.RESOLVED);
          setReviews(data.results);
        }
      } catch {
        setStatus(Status.REJECTED);
      }
    })();
  }, [movieId]);

  if (!reviews && status === Status.IDLE) {
    return <></>;
  }

  if (!reviews && status === Status.PENDING) {
    return <Loader />;
  }
  if (!reviews && status === Status.REJECTED) {
    return toast.warn('Error');
  }

  if (reviews && status === Status.RESOLVED) {
    return (
      <>
        <h3>Reviews</h3>
        <ul className={s.reviews_list}>
          {reviews.map(({ author, id, content }) => (
            <li key={id} className={s.reviews_item}>
              <p className={s.reviews_author}>{author ? author : 'no name'}</p>
              <p className={s.reviews_content}>{content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
};