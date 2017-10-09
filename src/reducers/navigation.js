import {
  SELECT_TAB
} from '../constants/ActionTypes'
  
const initialState = {
  currentSelectedKey: '1'
}
  
const navigation = (state = initialState, action) => {
  switch(action.type) {
    case SELECT_TAB:
      return {
        ...state,
        currentSelectedKey: action.index
      }
    default:
      return state
  }
}

export default navigation