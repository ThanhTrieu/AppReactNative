import React, {Component} from 'react';

//Redux
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

// container
import MovieContainer from './Containers/MovieContainer';
//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Sagas/RootSagas';
//Middleware
const sagaMiddleware = createSagaMiddleware();

//  reducers
import allReducers from './Reducers';
//store
const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MovieContainer/>
      </Provider>
    );
  }
}
sagaMiddleware.run(rootSaga);
export default Main;
