import { Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  AdditionalInfo,
  AdditionalList,
  AdditionalListItem,
  MovieDetailsInfo,
  MovieDetailsSection,
} from './MovieDetails.styled';
import { useMovie } from 'hooks/useMovie';

const MovieDetails = () => {
  const [movieDetails] = useMovie('Details');
  const location = useLocation();

  const { poster_path, title, vote_average, genres, overview } = movieDetails;

  return (
    <>
      <Link
        to={location.state?.from ?? '/'}
        style={{
          textDecoration: 'none',
          color: '#000000',
          display: 'inline-block',
          padding: '5px',
        }}
        onMouseEnter={e => {
          e.target.style.color = 'red';
        }}
        onMouseLeave={e => {
          e.target.style.color = '#000000';
        }}
        onFocus={e => {
          e.target.style.color = 'red';
        }}
        onBlur={e => {
          e.target.style.color = '#000000';
        }}
      >
        {'<'} Go back
      </Link>
      {!movieDetails ? (
        <div>There are no film details for this film</div>
      ) : (
        <MovieDetailsSection>
          <img
            src={
              poster_path ? 'https://image.tmdb.org/t/p/w500' + poster_path : ''
            }
            alt={title}
            width="200px"
          />
          <MovieDetailsInfo>
            <h2>{title}</h2>
            <p>Vote average: {vote_average}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h4>Genres</h4>
            <ul>
              {genres &&
                genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
            </ul>
          </MovieDetailsInfo>
          <AdditionalInfo>
            <h5>Additional information</h5>
            <AdditionalList>
              <AdditionalListItem>
                <Link to="cast">Cast</Link>
              </AdditionalListItem>
              <AdditionalListItem>
                <Link to="reviews">Reviews</Link>
              </AdditionalListItem>
            </AdditionalList>
          </AdditionalInfo>
          <Suspense fallback={<div>Please wait...</div>}>
            <Outlet />
          </Suspense>
        </MovieDetailsSection>
      )}
    </>
  );
};

export default MovieDetails;