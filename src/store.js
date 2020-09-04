import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootreducer from './Reducer/rootreducer'

const initalState = {};

const middleware = [thunk];

const store = createStore(rootreducer,initalState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;