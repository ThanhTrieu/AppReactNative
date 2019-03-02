'use strict';
import { FETCH_SUCCESS, FETCH_FAIL } from '../actions/actionTypes';

const fetchTopSorceReducers = (dataTopSorce = [], action) => {
    console.log(action.type);
    switch (action.type) {
        case FETCH_SUCCESS:
            //console.log(action);
            return action.reviceTopSocre;
        case FETCH_FAIL:
            return action.error;
        default:
            return dataTopSorce;
    }
};
export default fetchTopSorceReducers;