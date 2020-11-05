import * as actionsCodes from '../actions/actionTypes'
import update from 'immutability-helper';
import initialState from '../initailStates/Education.json'
export default function contactReducer(state = initialState, action) {
    switch (action.type) {
       case actionsCodes.ADD_EDUCATION:
            return update(state, { educationSection: { $set: action.educationSection } } );
        case actionsCodes.UPDATE_EDUCATION:
            return update(state, {  educationSection: { $set: action.educationSection } });
       default: return state;
    }  
}