import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import s from '../FilmItem/FilmItem.module.css';

export const FilmItem = ({ id, original_title, poster_path }) => {
  const location = useLocation();

  return (
    <Link to={`/movies/${id}`} state={{ from: location }} className={s.link}>
      <li className={s.film_item}>
        <img
          className={s.film_item_image}
          width="280"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
        />
        <p>{original_title}</p>
      </li>
    </Link>
  );
};

FilmItem.propTypes = {
  id: PropTypes.number.isRequired,
  original_title: PropTypes.string,
  poster_path: PropTypes.string,
};