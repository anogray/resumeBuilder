import authSection from '../initailStates/Auth.json';
import * as actionsCodes from '../actions/actionTypes';
import update from 'immutability-helper';
const authReducer = (state = authSection, action) => {
    switch (action.type) {
        case actionsCodes.SET_MAIL:
            return update(state, { authSection: { EMAIL: { $set: action.email } } });
        case actionsCodes.SET_PASSWORD:
            return update(state, { authSection: { PASSWORD: { $set: action.password } } });
        default: return state;
    }
}
export default authReducer
