import {
  REQUEST_DASHBOARD,
  RECEIVE_DASHBOARD
} from '../constants/ActionTypes'
  
const initialState = {
  visit: [],
  usage: [],
  visitors: 0,
  isFetching: false,
}
  
const dashboard = (state = initialState, action) => {
  switch(action.type) {
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