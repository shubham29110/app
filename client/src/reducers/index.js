import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import adminReducer from './adminReducer';
import projectReducer from './projectReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    admin: adminReducer,
    project: projectReducer
});