import {
  REQUEST_ARTICLES, 
  RECEIVE_ARTICLES,
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAILURE,
  UPDATE_ARTICLE,
  UPDATE_ARTICLE_REQUEST,
  UPDATE_ARTICLE_SUCCESS,
  UPDATE_ARTICLE_FAILURE,
  DELETE_ARTICLE_REQUEST,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAILURE,
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
  isOperating: false, // Creating, Updating or Deleting
  isSuccess: false // Indicate whether the operation is success
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
    case CREATE_ARTICLE_REQUEST:
      return {
        ...state,
        isOperating: true,
        isSuccess: false
      }
    case CREATE_ARTICLE_SUCCESS:
      // copy the article to the head of array
      const data = [
       action.article,
       ...state.data 
      ]
      return {
        ...state,
        isOperating: false,
        isSuccess: true,
        editingKey: undefined,
        data
      }
    case CREATE_ARTICLE_FAILURE:
      return {
        ...state,
        isOperating: false,
        isSuccess: false,
        editingKey: undefined
      }
    case UPDATE_ARTICLE:
      return {
        ...state,
        editingKey: action.key
      }
    case UPDATE_ARTICLE_REQUEST:
      return {
        ...state,
        isOperating: true,
        isSuccess: false
      }
    case UPDATE_ARTICLE_SUCCESS:
      return {
        ...state,
        isOperating: false,
        isSuccess: true,
        editingKey: undefined,
        data: state.data.map(article => {
          if (article.key === action.article.key) {
            return action.article
          }
          return article
        })
      }
    case UPDATE_ARTICLE_FAILURE:
      return {
        ...state,
        isOperating: false,
        isSuccess: false,
        editingKey: undefined
      }
    case DELETE_ARTICLE_REQUEST:
      return {
        ...state,
        isOperating: true,
        isSuccess: false
      }
    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        isOperating: false,
        isSuccess: true,
        data: state.data.filter(article => article.key !== action.key)
      }
    case DELETE_ARTICLE_FAILURE:
      return {
        ...state,
        isOperating: true,
        isSuccess: false
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