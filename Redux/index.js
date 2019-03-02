import React, { Component } from 'react';

//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// container
import CounterContainer from './Containers/Counter';
//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Sagas/rootSagas';
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
                <CounterContainer />
            </Provider>
        );
    }
}
sagaMiddleware.run(rootSaga);
export default Main;