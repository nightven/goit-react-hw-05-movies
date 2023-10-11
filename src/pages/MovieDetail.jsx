import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
// import img from '../images/noun-default-image-5191452.png';
import { getMovieDetails } from 'api/api';
import Load from 'components/Load/Load';
import Container from './Home.styled';
import {
  ButtonWrapper,
  ButtonsList,
  Descriptions,
  DetailWrap,
  ImageWrap,
} from './MoviesDetail.styled';

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';

  // const { title, vote_average, overview, release_date, genres, poster_path } =
  //   movieDetail.data;

  useEffect(() => {
    const getMovieById = async () => {
      try {
        setIsLoading(true);
        const detail = await getMovieDetails(movieId);
        setMovieDetail(detail);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    getMovieById();
  }, [movieId]);

  return (
    <Container>
      <ButtonWrapper>
        <Link to={backLinkLocationRef.current}>Go back</Link>
      </ButtonWrapper>

      {isLoading && <Load />}
      {isError && <div>Oops, something went wrong, try again latter.</div>}
      {movieDetail && (
        <DetailWrap>
          <ImageWrap>
            <h2>{movieDetail.data.title}</h2>
            <img
              src={`${BASE_IMG_URL}${movieDetail.data.poster_path}`}
              alt={movieDetail.data.title}
            />
          </ImageWrap>
          <Descriptions>
            <div>
              <p>
                <b>Overview: </b>
                {movieDetail.data.overview}
              </p>
              <p>
                <b>Genres: </b>
                {movieDetail.data.genres.map(genre => (
                  <span key={genre.id}>{genre.name} </span>
                ))}
              </p>
              <p>
                <b>Average: </b>
                {movieDetail.data.vote_average}
              </p>
              <p>
                <b>Release Date: </b>
                {movieDetail.data.release_date}
              </p>
            </div>
            <ButtonsList>
              <li>
                <Link to={'cast'}>Cast</Link>
              </li>
              <li>
                <Link to={'reviews'}>Reviews</Link>
              </li>
            </ButtonsList>
          </Descriptions>
        </DetailWrap>
      )}

      <Suspense fallback={<Load />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default MovieDetail;
