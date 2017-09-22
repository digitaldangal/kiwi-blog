import {
  REQUEST_ARTICLES, 
  RECEIVE_ARTICLES,
  SAVE_ARTICLE_REQUEST,
  SAVE_ARTICLE_SUCCESS,
  SAVE_ARTICLE_FAILURE,
  SEARCH
} from '../constants/ActionTypes'

const initialState = {
  data: [],
  isFetching: false,
  keywords: [],
  isSaving: false,
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
    case SAVE_ARTICLE_REQUEST:
      return {
        ...state,
        isSaving: true
      }
    case SAVE_ARTICLE_SUCCESS: 
      const data = [
        ...state.data,
       action.article 
      ]
      return {
        ...state,
        isSaving: false,
        data
      }
    case SAVE_ARTICLE_FAILURE:
      return {
        ...state,
        isSaving: false
      }
    default:
      return state
  }
}