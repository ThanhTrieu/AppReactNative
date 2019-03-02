import { combineReducers } from 'redux';
import fetchTopSorceReducers from './fetchTopSorceReducers';

const allReducers = combineReducers({
    fetchTopSorceReducers,
    //you can add more reducers here, separated by , !
});
console.log(allReducers);
export default allReducers;