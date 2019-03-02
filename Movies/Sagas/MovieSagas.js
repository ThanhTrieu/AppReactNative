'use strict';
import {
    FETCH_MOVIES,
    ADD_MOVIES,
    UPDATE_MOVIES,
    DELETE_MOVIES,
    FETCH_SUCCESSED,
    FETCH_FAILED
} from '../Actions/ActionTypes';
import { put, takeLatest, call } from 'redux-saga/effects';
import { Api } from '../Serviecs/FetchMovieService';

function* fetchMoiveData() {
    try {
        const movieData = yield call(Api.getMoviesFromApi);
        yield put({ type: FETCH_SUCCESSED, reviceMoives: movieData });
    } catch (error) {
        yield put({ type: FETCH_FAILED, error: error });
    }
}

export function* watchFetchMovieData() {
    yield takeLatest(FETCH_MOVIES, fetchMoiveData);
}