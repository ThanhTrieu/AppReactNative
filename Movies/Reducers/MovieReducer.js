'use strict';
import {
    FETCH_MOVIES,
    ADD_MOVIES,
    UPDATE_MOVIES,
    DELETE_MOVIES,
    FETCH_SUCCESSED,
    FETCH_FAILED
} from '../Actions/ActionTypes';

const MovieReducer = (movies = [], action = null) => {
    switch (action.type) {
        case FETCH_SUCCESSED:
            return action.reviceMoives;
        case FETCH_FAILED:
            return [];
        default:
            return movies;
    }
};
export default MovieReducer;