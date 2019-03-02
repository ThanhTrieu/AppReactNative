// quan ly tat ca cac saga roi dispatch sang redux

'use strict';
import { call } from 'redux-saga/effects';

import { flowActionSagas } from './fetchDataPlayerSaga';

export default function* rootSaga() {
    yield call(flowActionSagas);
}