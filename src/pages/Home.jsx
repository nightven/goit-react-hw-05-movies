import { getMoviesInTrends } from 'api/api';
import CardList from 'components/CardList/CardList';
import React, { useEffect, useState } from 'react';
import Container from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendsMovies = async () => {
      try {
        const movies = await getMoviesInTrends();
        setMovies(movies.data.results);
      } catch (error) {
        console.log(error.massage);
      }
    };

    getTrendsMovies();
  }, []);

  return (
    <Container >
      <h1>Trend of day</h1>
      <CardList movies={movies} />
    </Container>
  );
};
export default Home;
