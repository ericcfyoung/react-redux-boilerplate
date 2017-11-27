import {combineReducers} from 'redux';

import defaultReducer from './common/default';


const reducers = combineReducers({
    default: defaultReducer
});

export default reducers;

