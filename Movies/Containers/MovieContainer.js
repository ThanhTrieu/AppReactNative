'use strict';
import { connect } from 'react-redux';
import { fetchMovieDatas } from '../Actions';
import MovieComponet from '../Components/MovieComponet';

const mapStateToProps = (state) => {
    return {
        movies: state.MovieReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchMovies: (sort) => {
            dispatch(fetchMovieDatas(sort));
        }
    };
};

const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(MovieComponet);
export default MovieContainer;