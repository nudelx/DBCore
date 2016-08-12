import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import test from '../reducers/test'
export default combineReducers({
    test,
    routing: routerReducer
})
