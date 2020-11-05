import initialState from './inititalState.json';
import * as actionsCodes from '../actions/actionTypes'
import update from 'immutability-helper';
import { combineReducers } from "redux"

const skinReducer = () => {
    (state = initialState, action) {
        switch (action.type) {
            case actionsCodes.SET_SKIN:
                return update(state, { document: { skinCd: { $set: action.skinCd } } });

            case actionsCodes.UPDATE_SKIN:
                return update(state, { document: { skinCd: { $set: action.skinCd } } });

            // case actionsCodes.ADD_EDUCATION:
            //     return update(state, { educationSection: { $set: action.educationSection } } );

            // case actionsCodes.UPDATE_EDUCATION:
            //     return update(state, { document: { educationSection: { $set: action.educationSection } } });

            // case actionsCodes.ADD_CONTACT:
            //     return update(state, { document: { contactSection: { $set: action.contactSection } } });

            // case actionsCodes.UPDATE_CONTACT:
            //     return update(state, { document: { contactSection: { $set: action.contactSection } } });

            case actionsCodes.SET_MAIL:
                // console.log("set email", action.email)

                console.log("updating the new", action.email);

                return update(state, { authSection: { EMAIL: { $set: action.email } } });
            //  update(state, { authSection: { PASSWORD:{$set: action.obj.password } }});
            //  console.log("updating the new",state);
            //  return state;
            case actionsCodes.SET_PASSWORD:
                console.log("updating the new", action.password);
                return update(state, { authSection: { PASSWORD: { $set: action.password } } });
            default: return state;
        }
    }
}


export default skinReducer;