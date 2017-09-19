import {
  REQUEST_ARTICLES, 
  RECEIVE_ARTICLES
} from '../constants/ActionTypes'

const initialState = {
  data: [],
  isFetching: false
}


export default function articles(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_ARTICLES:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    default:
      return state
  }
}