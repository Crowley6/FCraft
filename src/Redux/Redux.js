import {combineReducers, legacy_createStore} from 'redux';
import MainReducer from '../Main/MainReducer';

let reducers = combineReducers({
    MainReducer:MainReducer
})
let Redux = legacy_createStore(reducers);

export default Redux;