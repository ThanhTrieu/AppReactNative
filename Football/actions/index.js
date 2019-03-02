'use strict';
import { FETCH_SUCCESS, FETCH_FAIL, SEARCH_DATA, FETCH_DATA } from './actionTypes';
export const fetchAllData = (sort) => {
    return {
        type: FETCH_DATA,
        sort
    };
};

export const searchDataPalyer = (keyword) => {
    return {
        type: SEARCH_DATA,
        key: keyword
    };
};

export const fetchSuccessData = (reviceTopSocre) => {
    return {
        type: FETCH_SUCCESS,
        //success: success,
        reviceTopSocre: reviceTopSocre
    };
};

export const fetchFailData = (error) => {
    return {
        type: FETCH_FAIL,
        error: error
    };
};