// Dinh nghia cac ham - phuong thuc tuong ung voi cac action ma nguoi dung tao ra
import { INCEREMENT, DECEREMENT } from './ActionTypes';

// cau truc 1 action trong redux
// ban chat la ham tra ve 1 object mieu ta cac action
// cac tham so ben trong co the co nhieu hoac it tuy vao bai toan - nhung luon co tham so type

export const incerementNumber = (step) => {
    // step tham so truyen vao thong thuong la state (vi moi mot action xay ra co the lam thay doi state nen ta can biet duoc la no da thay doi nhu the nao de tien cho cac xu ly) 
    return {
        type: INCEREMENT,
        step: step,
        //step : [...step,]
    }
}

export const decerementNumber = (step) => {
    return {
        type: DECEREMENT,
        step: step,
        //step : [...step,]
    }
}