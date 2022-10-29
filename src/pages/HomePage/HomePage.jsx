import React from 'react';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from '../HomePage/HomePage.module.css';

import { getTrending } from '../../services/API';
import { FilmList } from 'components/FilmList';
import { Loader } from 'components/Loader';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    (async () => {
      setStatus(Status.PENDING);
      try {
        const { data } = await getTrending();

        if (!data.results.length) {
          setStatus(Status.REJECTED);
          setMovies([]);
          return toast.info('I can not find it, please - try again.');
        } else {
          setStatus(Status.RESOLVED);
          setMovies(data.results);
        }
      } catch {
        setStatus(Status.REJECTED);
      }
    })();
  }, []);

  if (!movies && status === Status.IDLE) {
    return <></>;
  }

  if (!movies && status === Status.PENDING) {
    return <Loader />;
  }
  if (!movies && status === Status.REJECTED) {
    return toast.warn('Error');
  }
  if (movies && status === Status.RESOLVED) {
    return (
      <>
        <h1 className={s.title}>Popular Movies</h1>
        {movies.length > 0 && <FilmList movies={movies} status={status} />}

        <ToastContainer autoClose={3000} />
      </>
    );
  }
};