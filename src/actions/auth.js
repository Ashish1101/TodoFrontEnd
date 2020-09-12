import {
 ADD_USER,
 ADD_USER_FAIL,
 LOAD_USER,
 LOAD_USER_FAIL,
 LOGIN_USER,
 LOGIN_USER_FAIL,
 LOGOUT,
 LOGOUT_FAIL
} from './types';

import setAuthToken from '../utils/Token'

import axios from 'axios'

//register user
export const addUser = (data) => async dispatch => {
    try{
        const res = await axios.post('/register/' , data);
        dispatch({
            type: ADD_USER,
            payload: res.data 
        })
    } catch(err) {
        console.log(err);
        dispatch({
            type : ADD_USER_FAIL,
            payload: err.response.data.msg
        })
    }
}

//getUser profile
export const loadUser = () => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }
      try {
        
      const res = await axios.get('/auth/user')
      dispatch({
          type : LOAD_USER,
          payload: res.data
      })
     

      } catch (err) {
           console.log(err);
           dispatch({
               type: LOAD_USER_FAIL,
               payload: err.response.data
           })

      }
}

//login user
export const loginUser = (userData) => async dispatch => {
    try {
        const config = {
            headers : {
               'Content-Type':'application/json'
            }
        }
        const res = await axios.post('/auth/' , userData , config);

        dispatch({
            type: LOGIN_USER,
            payload: res.data
        })
        loadUser()
    } catch (err) {
        console.log(err.response)
        dispatch({
            type: LOGIN_USER_FAIL,
            payload: err.response
        })
    }
}

export const logOut = () => async dispatch => {
    try {
       dispatch({
           type : LOGOUT
       })
    } catch(err) {
        dispatch({
            type : LOGOUT_FAIL
        })
    }
}
