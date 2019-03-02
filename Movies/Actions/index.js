'use strict';
import {
    FETCH_MOVIES,
    ADD_MOVIES,
    UPDATE_MOVIES,
    DELETE_MOVIES,
    FETCH_SUCCESSED,
    FETCH_FAILED
} from './ActionTypes';

export const fetchMovieDatas = (sort) => {
    return {
        type : FETCH_MOVIES,
        sort
    };
};

export const fetchMovieSuccess = (reviceMoives) => {
    return {
        type: FETCH_SUCCESSED,
        reviceMoives
    };
};

export const fetchMovieFails = (error) => {
    return {
        type : FETCH_FAILED,
        error
    };
};