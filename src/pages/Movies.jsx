import { getMoviesForQuery } from 'api/api';
import CardList from 'components/CardList/CardList';
import Load from 'components/Load/Load';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from './Home.styled';
import { InputSearch } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('query') ?? '';
  console.log();

  useEffect(() => {
    if (!search) return setIsLoadMore(false);
  }, [search]);

  useEffect(() => {
    if (!search) return setMovies([]);
    const getMoviesByQuery = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const resp = await getMoviesForQuery(search, page);
        if (page === 1) {
          setMovies(resp.data.results);
        } else {
          setMovies(prevMovies => [...prevMovies, ...resp.data.results]);
          setIsLoadMore(
            resp.data.total_pages < Math.ceil(resp.data.total_result / 20)
          );
        }
        setIsLoadMore(true);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    getMoviesByQuery();
  }, [searchParams, page, search]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const updateQueryString = evt => {
    if (evt.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: evt.target.value.trim() });
  };

  return (
    <Container>
      <p>Search Movies</p>
      <InputSearch
        placeholder="Search"
        type="text"
        value={search}
        onChange={updateQueryString}
      />
      {isLoading && <Load />}
      {isError ? (
        <div>
          Oops, something went wrong, try again or enter a different query.
        </div>
      ) : (
        movies.length !== 0 && <CardList movies={movies} />
      )}
      {isLoadMore && (
        <button onClick={loadMore} type="button">
          Load more
        </button>
      )}
    </Container>
  );
};
export default Movies;
