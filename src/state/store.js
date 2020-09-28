import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer} from './reducer';
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    reducer
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;