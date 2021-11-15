import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import statesReducer from './states/states';

const reducers = combineReducers({ statesReducer });
const store = createStore(reducers, applyMiddleware(logger));

export default store;
