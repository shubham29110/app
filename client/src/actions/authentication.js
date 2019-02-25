import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerUser = (user, history) => async dispatch => {
    
    try {
        const res= await axios.post('/api/users/register', user)
       
        if(res){
         history.push('/login')
        }
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
}

export const loginUser =  (user) =>async dispatch => {
    
   try {
    const res =await axios.post('/api/users/login', user)
    if(res){
     console.log(res)
     const { token } = res.data;
     localStorage.setItem('jwtToken', token);
     setAuthToken(token);
     const decoded = jwt_decode(token);
     dispatch(setCurrentUser(decoded));
    }  
   } catch (error) {
    dispatch({
        type: GET_ERRORS,
        payload: error.response.data
    });
   }   
}

export const setCurrentUser = decoded => {
    
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = (history) => dispatch => {
    
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push('/login');
}