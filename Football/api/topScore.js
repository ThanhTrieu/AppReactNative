'use strict';
const urlGetMovies = "https://heisenbug-premier-league-live-scores-v1.p.mashape.com/api/premierleague/table/scorers";

function* getTopSorceFromApi() {
    const response = yield fetch(urlGetMovies, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'X-Mashape-Key': 'vrZ4opuiTAmshpswaCGMaldZRhYGp1NH0Oljsn6yHbqm2Lmi16',
            'Content-Type': 'application/json;charset=UTF-8',
        },
        body: '',
    });
    const movies = yield(response !== null || response !== '') ? JSON.parse(response.scorers) : [];
    return movies;
}
export const Api = {
    getTopSorceFromApi
};