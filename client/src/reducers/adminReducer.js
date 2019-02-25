import { ADD_PROJECT,ADD_DEVELOPER } from '../actions/types';
import isEmpty from '../helper/is-empty';

const initialState = {
    projectAdded: false,
    project: {},
    developerAdded: false,
    developer:{}
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case ADD_DEVELOPER:
        debugger
            return {
                ...state,
                developerAdded: !isEmpty(action.payload),
                developer: action.payload
            }
        case ADD_PROJECT:
        debugger
            return {
                ...state,
                projectAdded: !isEmpty(action.payload),
                project: action.payload
            }
        default: 
            return state;
    }
}