import { SET_CURRENT_USER } from '../actions/types';
import isEmpty from '../helper/is-empty';

const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case SET_CURRENT_USER:
        debugger
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        default: 
            return state;
    }
}