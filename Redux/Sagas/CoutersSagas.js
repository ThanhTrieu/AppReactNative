import {INCEREMENT, DECEREMENT} from '../Actions/ActionTypes';
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';

function* incrementAdd(){
    console.log(`goi vao saga incrementAdd`);
}

function* decrementMinus(){
    console.log(`goi vao saga decrementMinus`);
}

// theo doi xem 2 thang tren thuc thi nhu the nao
export function* flowIncrementAdd() {
    yield takeEvery(INCEREMENT,incrementAdd);
}

export function* flowDecrementMinus() {
    yield takeEvery(DECEREMENT, decrementMinus);
}

// export default function* watchAllProcess(){
//     takeLatest(flowIncrementAdd);
// }