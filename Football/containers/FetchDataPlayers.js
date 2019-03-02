'use strict';
import { connect } from 'react-redux';
import { fetchAllData } from '../actions';

import managerComponents from '../components';

const mapStateToProps = (state) => {
    return {
        dataTopSorce: state.fetchTopSorceReducers
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchAllDataPlayer: (sort) => {
            dispatch(fetchAllData(sort));
        }
    };
};

const fetchDataPlayerContainer = connect(mapStateToProps, mapDispatchToProps)(managerComponents);
export default fetchDataPlayerContainer;