import { ADD_TECHNOLOGY ,ADD_DEVELOPER} from '../actions/types';
import isEmpty from '../helper/is-empty';

const initialState = {
    technologyAdded: false,
    technology:[],
    developer:[],
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case ADD_TECHNOLOGY:
        debugger
            return {
                ...state,
                technologyAdded: !isEmpty(action.payload),
                technology: action.payload
            }
        case ADD_DEVELOPER:
        debugger
            return {
                ...state,
                technologyAdded: !isEmpty(action.payload),
                developer: action.payload
            }
        default: 
            return state;
    }
}