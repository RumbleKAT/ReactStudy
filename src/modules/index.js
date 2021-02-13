import {combineReducers } from 'redux';
import counter from './counter'
// import todo from './todos'
import posts from './posts';

const rootReducer = combineReducers({
    counter,
    // todo,
    posts
})

export default rootReducer;