import { combineReducers } from 'redux'
import articles from './articles'
import dashboard from './dashboard'

const rootReducer = combineReducers({
  articles,
  dashboard
})
  
export default rootReducer