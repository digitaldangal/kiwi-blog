import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
  } from '../constants/ActionTypes'
    
  const initialState = {
    isLoading: false,
    isAuthenticated: false
  }
    
  const authenticate = (state = initialState, action) => {
    switch(action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          isLoading: true
        }
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isAuthenticated: true
        }
      case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false
      }
      default:
        return state
    }
  }
  
  export default authenticate