import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from '../../services/API';
import { FilmList } from 'components/FilmList';
import { SearchBar } from 'components/SearchBar';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const Movies = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    (async () => {
      if (!query) {
        return;
      }
      setStatus(Status.PENDING);
      try {
        const { data } = await getSearchMovies(query);

        if (!data.results.length) {
          setStatus(Status.REJECTED);
          setMovies([]);
          return toast.warn('I did nоt find anything =(');
        } else {
          setStatus(Status.RESOLVED);
          setMovies(data.results);
        }
      } catch {
        setStatus(Status.REJECTED);
      }
    })();
  }, [query]);

  if (!movies && status === Status.IDLE) {
    return <></>;
  }

  if (!movies && status === Status.PENDING) {
    return <Loader />;
  }
  if (!movies && status === Status.REJECTED) {
    return toast.warn('Error');
  }

  return (
    <>
      <SearchBar />
      {movies.length > 0 && <FilmList movies={movies} status={status} />}
    </>
  );
};