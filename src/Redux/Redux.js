import {combineReducers, legacy_createStore} from 'redux';
import MainReducer from '../Main/MainReducer';
import ReceptsReducer from '../Recepts/ReceptsReducer';

let reducers = combineReducers({
    MainReducer:MainReducer,
    ReceptsReducer:ReceptsReducer,
})
let Redux = legacy_createStore(reducers);

export default Redux;