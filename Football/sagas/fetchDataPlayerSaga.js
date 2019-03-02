'use strict';
import { FETCH_SUCCESS, FETCH_FAIL, FETCH_DATA } from '../actions/actionTypes';
import { put, takeLatest } from 'redux-saga/effects';

import { Api } from '../api/topScore';

function* fetchTopScorcePlayer() {
    try {
        const data = yield Api.getTopSorceFromApi();
        // dispatch
        yield put({ type: FETCH_SUCCESS, reviceTopSocre: data });
    } catch (error) {
        yield put({ type: FETCH_FAIL, error: error.message });
    }
}

export function* flowActionSagas() {
    yield takeLatest(FETCH_DATA, fetchTopScorcePlayer);
}