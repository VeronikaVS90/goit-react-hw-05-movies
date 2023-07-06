import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieAPI } from "API/API";

export const useMovie = type => {
  const [state, setState] = useState(type === 'Details' ? {} : []);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      if (type === 'Cast') {
        (async () => {
          setState(await MovieAPI.getMovieCredits(movieId));
        })();
        return;
      }

      if (type === 'Reviews') {
        (async () => {
          setState(await MovieAPI.getMovieReviews(movieId));
        })();
        return;
      }

      if (type === 'Details') {
        (async () => {
          setState(await MovieAPI.getMovieDetails(movieId));
        })();
        return;
      }
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }, [movieId, type]);

  return [state];
};