import {
  REQUEST_ARTICLES, 
  RECEIVE_ARTICLES,
  SEARCH
} from '../constants/ActionTypes'

const initialState = {
  data: [],
  isFetching: false,
  keywords: []
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
    case SEARCH:
      return {
        ...state,
        keywords: action.keywords
      }
    default:
      return state
  }
}