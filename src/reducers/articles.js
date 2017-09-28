import {
  REQUEST_ARTICLES, 
  RECEIVE_ARTICLES,
  SAVE_ARTICLE_REQUEST,
  SAVE_ARTICLE_SUCCESS,
  SAVE_ARTICLE_FAILURE,
  SEARCH,
  SEARCH_TAG,
  READ_ARTICLE,
  RATING_REQUEST,
  RATING_SUCCESS,
  RATING_FAILURE
} from '../constants/ActionTypes'

const initialState = {
  data: [],
  isFetching: false,
  keywords: [],
  tagFilter: '',
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
    case SEARCH_TAG:
      return {
        ...state,
        tagFilter: action.tag
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
    case RATING_REQUEST:
      return {
        ...state,
        data: state.data.map(article => {
          if (article.key === action.key) {
            return {
              ...article,
              rate: {
                ...article.rate,
                isRating: true
              }
            }
          }
          return article
        })
      }
    case RATING_SUCCESS:
      return {
        ...state,
        data: state.data.map(article => {
          if (article.key === action.key) {
            return {
              ...article,
              rate: {
                num: article.rate.num + 1,
                sum: article.rate.sum + action.rate,
                isRating: false
              }
            }
          }
          return article
        })
      }
    case RATING_FAILURE:
      return {
        ...state,
        data: state.data.map(article => {
          if (article.key === action.key) {
            return {
              ...article,
              rate: {
                ...article.rate,
                isRating: false
              }
            }
          }
          return article
        })
      }
    default:
      return state
  }
}