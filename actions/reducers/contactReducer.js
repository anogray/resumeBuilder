import * as actionsCodes from '../actions/actionTypes'
import update from 'immutability-helper';
import initialState from '../initailStates/Contact.json'
export default function contactReducer(state = initialState, action) {
    switch (action.type) {
        case actionsCodes.ADD_CONTACT:
            return update(state, { contactSection: { $set: action.contactSection } } );
        case actionsCodes.UPDATE_CONTACT:
            return update(state,  { contactSection: { $set: action.contactSection } } );
       default: return state;
    }  
}