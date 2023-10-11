import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import Layout from './Layout/Layout';
const Home =lazy(() => import('../pages/Home'))
const Movies =lazy(() => import('../pages/Movies'))
const NotFound =lazy(() => import('../pages/NotFound'))
const MovieDetail =lazy(() => import('../pages/MovieDetail'))

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetail />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
       
      </Route>
    </Routes>
  );
};
