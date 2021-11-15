import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import statesReducer from './states/states';

const reducers = combineReducers({ statesReducer });
const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
