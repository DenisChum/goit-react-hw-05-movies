import { useState, useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../services/API';
import { toast } from 'react-toastify';
import s from '../MovieDetails/MovieDetails.module.css';
import { Loader } from 'components/Loader';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      if (!movieId) {
        return;
      }
      setStatus(Status.PENDING);
      try {
        const { data } = await getMovieDetails(movieId);

        if (!data) {
          setStatus(Status.REJECTED);
          setMovieDetails([]);
          return toast.warn('No information');
        } else {
          setStatus(Status.RESOLVED);
          setMovieDetails(data);
        }
      } catch {
        setStatus(Status.REJECTED);
      }
    })();
  }, [movieId]);

  if (!movieDetails && status === Status.IDLE) {
    return <></>;
  }

  if (!movieDetails && status === Status.PENDING) {
    return <Loader />;
  }
  if (!movieDetails && status === Status.REJECTED) {
    return toast.warn('Error');
  }

  if (movieDetails && status === Status.RESOLVED) {
    const {
      poster_path,
      original_title,
      release_date,
      vote_average,
      overview,
      genres,
    } = movieDetails;

    return (
      <>
        <Link to={location.state?.from || `/`}>{'Go back'}</Link>
        <div className={s.wrapper}>
          <img
            src={
              `https://image.tmdb.org/t/p/w500${poster_path}`
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : 'no image'
            }
            alt={original_title}
            width="280"
          />
          <div className={s.mvieDetails}>
            <h2 className={s.title}>
              {original_title}({release_date.slice(0, 4)})
            </h2>
            <p>User score: {(vote_average * 10).toFixed(0)}%</p>
            <h3 className={s.title}>Overview</h3>
            <p className={s.overview}>{overview}</p>
            <h3 className={s.title}>Genres</h3>
            <p className={s.genres}>
              {genres.length > 0
                ? genres.map(item => item.name).join(', ')
                : 'no info'}
            </p>
          </div>

          <div className={s.add_info}>
            <h3 className={s.title}>Additional information</h3>
            <ul className={s.list}>
              <li className={s.item}>
                <Link
                  to={`/movies/${movieId}/cast`}
                  state={location.state}
                  className={s.link}
                >
                  Cast
                </Link>
              </li>
              <li className={s.item}>
                <Link
                  to={`/movies/${movieId}/reviews`}
                  state={location.state}
                  className={s.link}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      </>
    );
  }
};