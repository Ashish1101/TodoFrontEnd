import {
  ADD_USER,
  ADD_USER_FAIL,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOAD_USER,
  LOGOUT,
  LOGOUT_FAIL
} from '../actions/types'

const initialState = {
    user: null,
    isAuthenticated: false,
    error: null,
    loading:  true,
   
}

export default ( state = initialState , action) => {
  switch(action.type) {
     case ADD_USER:
       localStorage.setItem("token" , action.payload.token)
      //  console.log(action.payload)
         return {
             ...state,
             isAuthenticated: true,
             loading: true,
             user: action.payload
         }
      case ADD_USER_FAIL:
         case LOGIN_USER_FAIL:
           case LOGOUT_FAIL:
        localStorage.removeItem("token")
        return {
          ...state,
          error: action.payload,
          isAuthenticated: false,
          loading: false,
          user: null
        }

      case LOGIN_USER:
        localStorage.setItem("token" , action.payload.token)
        return {
          ...state,
          user:  action.payload,
          isAuthenticated : true,
          loading: true,
          error: false
        }

      case LOAD_USER:
        
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
          error: false
        }

      case LOGOUT:
        localStorage.removeItem("token")
        return {
          isAuthenticated: false,
          user: null,
          loading: false
        }
      
    default:
       return state
  }
}