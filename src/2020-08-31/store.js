import {createStore, applyMiddleware} from 'redux';
import {composeDevTools, composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from './reducers/rootReducer';

const initialState = {};

const middlware = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlware)));

export default store;