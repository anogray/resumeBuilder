import * as actionTypes from './actionTypes';

export function add(educationSection){
    return {type: actionTypes.ADD_EDUCATION, educationSection}
}

export function update(educationSection){
    return {type: actionTypes.UPDATE_EDUCATION, educationSection}
}