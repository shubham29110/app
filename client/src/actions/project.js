import { GET_ERRORS,ADD_TECHNOLOGY,ADD_DEVELOPER} from './types';

export const addTechnology = (technology) => async dispatch => {
  debugger
    try {
        if(technology){
          dispatch({
            type: ADD_TECHNOLOGY,
            payload: technology
        });
        }
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
}

export const addCorrespondingDeveloper = (developer) => async dispatch => {
    debugger
      try {
          if(developer){
            dispatch({
              type: ADD_DEVELOPER,
              payload: developer
          });
          }
      } catch (error) {
          dispatch({
              type: GET_ERRORS,
              payload: error.response.data
          });
      }
  }




