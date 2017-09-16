import {
  REQUEST_ARTICLES, 
  RECEIVE_ARTICLES, 
  ADD_ARTICLE_REQUEST
} from '../constants/ActionTypes'

const initialState = []

export default function articles(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return state
    case RECEIVE_ARTICLES:
      return action.articles
    default:
      return state
  }
}