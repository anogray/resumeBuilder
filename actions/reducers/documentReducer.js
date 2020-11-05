import initialState from '../initailStates/Document.json';
import * as actionsCodes from '../actions/actionTypes'
import update from 'immutability-helper';
export default function documentReducer(state = initialState, action) {
    switch (action.type) {
        case actionsCodes.SET_SKIN:
            return update(state, { document: { skinCd: { $set: action.skinCd } } });
        case actionsCodes.UPDATE_SKIN:
            return update(state, { document: { skinCd: { $set: action.skinCd } } });
        default: return state;
    }
    
    

}