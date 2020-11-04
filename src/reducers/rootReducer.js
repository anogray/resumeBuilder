import initialState from './inititalState.json';
import * as actionsCodes from '../actions/actionTypes'
import update from 'immutability-helper';
export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case actionsCodes.SET_SKIN:
            return update(state, { document: { skinCd: { $set: action.skinCd } } });

        case actionsCodes.UPDATE_SKIN:
            return update(state, { document: { skinCd: { $set: action.skinCd } } });

        case actionsCodes.ADD_EDUCATION:
            return update(state, { document: { educationSection: { $set: action.educationSection } } });

        case actionsCodes.UPDATE_EDUCATION:
            return update(state, { document: { educationSection: { $set: action.educationSection } } });

        case actionsCodes.ADD_CONTACT:
            return update(state, { document: { contactSection: { $set: action.contactSection } } });

        case actionsCodes.UPDATE_CONTACT:
            return update(state, { document: { contactSection: { $set: action.contactSection } } });

        default:
            return state;
    }

}