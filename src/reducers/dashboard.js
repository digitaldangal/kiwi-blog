import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REQUEST_DASHBOARD,
  RECEIVE_DASHBOARD
} from '../constants/ActionTypes'
  
const initialState = {
  visit: [],
  usage: [],
  visitors: 0,
  isFetching: false,
  login: {
    isLoading: false,
    isAuthenticated: false
  }
}
  
const dashboard = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        login: {
          ...state.login,
          isLoading: true
        }
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          ...state.login,
          isLoading: false,
          isAuthenticated: true
        }
      }
    case LOGIN_FAILURE:
    return {
      ...state,
      login: {
        ...state.login,
        isLoading: false,
        isAuthenticated: false
      }
    }
    case REQUEST_DASHBOARD:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_DASHBOARD:
      return {
        ...state,
        isFetching: false,
        visit: action.visit,
        usage: action.usage,
        visitors: action.visitors
      }
    default:
      return state
  }
}

export default dashboard