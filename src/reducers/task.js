import {
  ADD_ITEM,
  ADD_ITEM_FAIL,
  DELETE_ITEM,
  GET_ITEMS,
  GET_ITEMS_FAIL,
  DELETE_ITEM_FAIL
} from '../actions/types'

const initialState = {
    tasks: [],
    error : null,
    loading : false
}

export default (state = initialState , action) => {
     switch(action.type) {
         case ADD_ITEM:
             return {
                 ...state,
                 tasks : [action.payload , ...state.tasks],
                 loading : true,
                 error : null
            }
         
         case ADD_ITEM_FAIL:
            case GET_ITEMS_FAIL:
             return {
                 ...state,
                 tasks : [],
                 loading: false,
                 error: action.payload
             }
        case GET_ITEMS:
            case DELETE_ITEM_FAIL:
            return {
                ...state,
                tasks: action.payload,
                error: null,
                loading: true
            }
        case DELETE_ITEM:
            return {
                ...state,
                tasks : state.tasks.filter(item => item._id !== action.payload),
                error: null,
                loading : true
            }
        default:
            return state
     }
}