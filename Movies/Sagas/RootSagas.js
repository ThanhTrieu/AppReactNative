'use strict';
import { fork, call } from 'redux-saga/effects';

import { watchFetchMovieData } from './MovieSagas';

export default function* rootSaga() {
    yield fork(watchFetchMovieData);
}