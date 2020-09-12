import {
  ADD_ITEM,
  ADD_ITEM_FAIL,
  GET_ITEMS,
  GET_ITEMS_FAIL
} from './types'

import axios from 'axios'


export const addTask =  (taskData) => async dispatch => {
    const config = {
        headers : {
            'Content-Type':'application/json'
        }
    } 
    try {
         const res = await axios.post('/tasks/' , taskData , config);
         console.log(res)
         dispatch({
             type : ADD_ITEM,
             payload : res.data
         })
     } catch (err) {
         dispatch({
             type : ADD_ITEM_FAIL,
             payload : err.response.statusText
         })
     }
}

export const getTask = () => async dispatch => {
    try {
        const res = await axios.get('/tasks/')
        dispatch({
            type : GET_ITEMS,
            payload : res.data
        })
    } catch (err) {
        dispatch({
            type : GET_ITEMS_FAIL,
            payload : err.response.data
        })
    }
}