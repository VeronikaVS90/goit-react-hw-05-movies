import { MovieAPI } from 'API/API';
import { useEffect, useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { Input, ResultsList, SubmitInput } from './Movies.styled';

const Movies = () => {
  const [resultsList, setResultsList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const query = searchParams.get('query') ?? '';
  const [searchQuery, setSearchQuery] = useState(query);
  const location = useLocation();

  const handleInputChange = ({ target }) => {
    if (target.value !== '') {
      return setSearchParams({ query: target.value });
    }

    setSearchParams({});
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    (async () => {
      setResultsList(await MovieAPI.getMovieByName(searchQuery));
    })();
  }, [searchQuery]);

  const handleFormSubmit = async event => {
    event.preventDefault();
    setSearchQuery(query.trim());
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleFormSubmit}>
        <Input
          type="text"
          name="query"
          value={query}
          onChange={handleInputChange}
          placeholder="input film name to search"
          required
        />
        <SubmitInput type="submit" value="Find my film" />
      </form>
      {resultsList.length !== 0 && (
        <ResultsList>
          {resultsList.map(film => (
            <li key={film.id}>
              <Link to={`${film.id}`} state={{ from: location }}>
                {film.title || film.name}
              </Link>
            </li>
          ))}
        </ResultsList>
      )}
    </>
  );
};

export default Movies;