//'use strict';
// noi nay nhan cac action va bat dau thuc thi
import { INCEREMENT, DECEREMENT } from '../Actions/ActionTypes';

// xu ly cong viec ma action yeu cau
const counterReducers = (times = 0, action) => {
    switch (action.type) {
        case INCEREMENT:
            return times + action.step;
        case DECEREMENT:
            return times - action.step;

        default:
            return times; //state does not change
    }
}

export default counterReducers;