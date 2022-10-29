import React from 'react';
import PropTypes from 'prop-types';
import { FilmItem } from 'components/FilmItem';
import { Loader} from 'components/Loader';
import s from '../FilmList/FilmList.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const FilmList = ({ movies = [], status = Status.IDLE }) => {
  return (
    <>
      {status === Status.RESOLVED && (
        <ul className={s.film_list}>
          {movies.map(({ id, original_title, poster_path }) => (
            <FilmItem
              key={id}
              id={id}
              original_title={original_title}
              poster_path={poster_path}
            />
          ))}
        </ul>
      )}
      {status === Status.PENDING && <Loader />};
      {status === Status.REJECTED && (
        <p className={s.error}>Something is wrong...</p>
      )}
    </>
  );
};
FilmList.propTypes = {
  status: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};