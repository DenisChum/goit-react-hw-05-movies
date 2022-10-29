import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader';
import s from '../Layout/Layout.module.css';

export const Layout = () => {
  const getActiveClassName = ({ isActive }) => {
    return isActive ? `${s.item} ${s.active}` : s.item;
  };

  return (
    <>
      <div className={s.nav}>
        <NavLink to="/" end className={getActiveClassName}>
          Home
        </NavLink>
        <NavLink to="/movies" className={getActiveClassName}>
          Movies
        </NavLink>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};