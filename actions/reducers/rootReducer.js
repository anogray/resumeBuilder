import {combineReducers} from 'redux';
import authReducer from './authReducer';
import contactReducer from './contactReducer';
import documentReducer from './documentReducer';
import educationReducer from './educationReducer'
const rootReducer = combineReducers({
    authReducer,
    educationReducer,
    contactReducer,
    documentReducer
});

export default rootReducer