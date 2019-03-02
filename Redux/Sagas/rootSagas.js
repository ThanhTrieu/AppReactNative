// quan ly tat ca cac saga roi dispatch sang redux
import { delay } from 'redux-saga';
import { all } from 'redux-saga/effects';

import { flowIncrementAdd, flowDecrementMinus } from './CoutersSagas';

export default function* rootSaga() {
    //delay(1000);
    yield all([
        flowIncrementAdd(),
        flowDecrementMinus(),
    ]);
}