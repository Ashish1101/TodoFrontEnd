import {
  ADD_ITEM,
  ADD_ITEM_FAIL,
  DELETE_ITEM,
  DELETE_ITEM_FAIL,
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
         await axios.post('/tasks/' , taskData , {config , withCredentials : true});
         
         dispatch({
             type : ADD_ITEM,
            payload : taskData
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
        const res = await axios.get('/tasks/' , {withCredentials : true})
        dispatch({
            type : GET_ITEMS,
            payload : res.data
        })
    } catch (err) {
        dispatch({
            type : GET_ITEMS_FAIL,
            payload : err.response.statusText
        })
    }
}

export const deleteItem = (id) => async dispatch => {
    try {
        await axios.delete(`/tasks/${id}`, {withCredentials: true});
        dispatch({
            type : DELETE_ITEM,
            payload : id
        })
    } catch (err) {
        dispatch({
            type : DELETE_ITEM_FAIL,
            payload : err.response.data.msg
        })
    }
}