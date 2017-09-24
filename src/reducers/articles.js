import {
  REQUEST_ARTICLES, 
  RECEIVE_ARTICLES,
  SAVE_ARTICLE_REQUEST,
  SAVE_ARTICLE_SUCCESS,
  SAVE_ARTICLE_FAILURE,
  SEARCH,
  READ_ARTICLE
} from '../constants/ActionTypes'

const initialState = {
  data: [],
  isFetching: false,
  keywords: [],
  isSaving: false
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
      // copy the article to the head of array
      const data = [
       action.article,
       ...state.data 
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
    case READ_ARTICLE:
      return {
        ...state,
        data: state.data.map(article => {
          if (article.key === action.key) {
            return {
              ...article,
              traffic: article.traffic + 1
            }
          }
          return article
        })
      }
    default:
      return state
  }
}