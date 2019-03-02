import { combineReducers } from 'redux';
import MovieReducer from './MovieReducer';

const allReducers = combineReducers({
    MovieReducer,
});
export default allReducers;