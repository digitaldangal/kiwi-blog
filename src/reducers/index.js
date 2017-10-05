import { combineReducers } from 'redux'
import articles from './articles'
import authenticate from './authenticate'
import dashboard from './dashboard'

const rootReducer = combineReducers({
  articles,
  authenticate,
  dashboard
})
  
export default rootReducer