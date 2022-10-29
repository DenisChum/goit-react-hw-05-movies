import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieСredits } from '../../services/API';
import { toast } from 'react-toastify';
import s from '../Cast/Cast.module.css';
import { Loader } from 'components/Loader';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      if (!movieId) {
        return;
      }
      setStatus(Status.PENDING);
      try {
        const { data } = await getMovieСredits(movieId);

        if (!data.cast.length) {
          setStatus(Status.REJECTED);
          setCast([]);
          return toast.warn('No information');
        } else {
          setStatus(Status.RESOLVED);
          setCast(data.cast);
        }
      } catch {
        setStatus(Status.REJECTED);
      }
    })();
  }, [movieId]);

  if (!cast && status === Status.IDLE) {
    return <></>;
  }

  if (!cast && status === Status.PENDING) {
    return <Loader/>;
  }
  if (!cast && status === Status.REJECTED) {
    return toast.warn('Error');
  }

  if (cast && status === Status.RESOLVED) {
    return (
      <>
        <h2>Cast</h2>
        <ul className={s.cast_list}>
          {cast.map(({ character, id, original_name, profile_path }) => (
            <li key={id} className={s.cast_item}>
              {profile_path && (
                <img
                  className={s.cast_image}
                  width="120"
                  src={
                    `https://image.tmdb.org/t/p/w500${profile_path}`
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : 'no image'
                  }
                  alt={original_name}
                />
              )}
              <div className={s.inner}>
                <p className={s.cast_name}>{original_name}</p>
                <p className={s.cast_character}>{character}</p>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
};