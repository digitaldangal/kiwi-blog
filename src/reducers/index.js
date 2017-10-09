import { combineReducers } from 'redux'
import articles from './articles'
import authenticate from './authenticate'
import dashboard from './dashboard'
import navigation from './navigation'

const rootReducer = combineReducers({
  articles,
  authenticate,
  dashboard,
  navigation
})
  
export default rootReducer