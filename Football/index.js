import React, {Component} from 'react';

//Redux
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

// container
import FetchTopSorceContainer from './containers/FetchDataPlayers';
//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSagas';
//Middleware
const sagaMiddleware = createSagaMiddleware();

//  reducers
import allReducers from './reducers';
//store
const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <FetchTopSorceContainer/>
      </Provider>
    );
  }
}
sagaMiddleware.run(rootSaga);
export default Main;
