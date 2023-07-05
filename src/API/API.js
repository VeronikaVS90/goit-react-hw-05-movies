import axios from "axios";

export const MovieAPI = {
    API_KEY: '8725014291262b48aab04b426e3a8196',
    BASE_URL: `https://api.themoviedb.org/3/`,

    getTrending: async () => {
        const trendingForToday = await axios.get(`${MovieAPI.BASE_URL}/trending/all/day?api_key=${MovieAPI.API_KEY}`).catch(error => {
            throw new Error(error.message);
        });
        return await trendingForToday.data.results;
    },

    getMovieByName: async movieName => {
        const movieByName = await axios.get(`${MovieAPI.BASE_URL}search/movie?api_key=${MovieAPI.API_KEY}&query=${movieName}`).catch(error => {
            throw new Error(error.message);
        });
        return movieByName.data.results;
    },

    getMovieDetails: async movieID => {
        const movieDetails = await axios.get(`${MovieAPI.BASE_URL}movie/${movieID}?api_key=${MovieAPI.API_KEY}`).catch(error => {
            throw new Error(error.message);
        });
        return movieDetails.data;
    },

    getMovieCredits: async movieID => {
        const movieCredits = await axios.get(`${MovieAPI.BASE_URL}movie/${movieID}/credits?api_key=${MovieAPI.API_KEY}`).catch(error => {
            throw new Error(error.message);
        });
        return movieCredits.data;
    },

    getMovieReviews: async movieID => {
        const movieCredits = await axios.get(`${MovieAPI.BASE_URL}movie/${movieID}/reviews?api_key=${MovieAPI.API_KEY}`).catch(error => {
            throw new Error(error.message);
        });
        return movieCredits.data.results;
    },
};

