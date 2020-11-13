import initialState from '../initailStates/initialState.json';
import * as actionTypes from '../actions/actionTypes';
import update from 'immutability-helper';


export default function authReducer(state= initialState.authSection, action){
    console.log("state",state)
    switch(action.type){
        case actionTypes.SIGN_IN:
           return  update(state,{ErrorMessage:{$set:''}}); 
        case actionTypes.SIGN_IN_FAILED:
           return  update(state,{ErrorMessage:{$set:action.error}});
        case actionTypes.REGISTER:
            return  update(state,{ErrorMessage:{$set:''}}); 
        case actionTypes.REGISTER_FAILED:
            return  update(state,{ErrorMessage:{$set:''}}); 
            default:
             return state;
        
    }
}