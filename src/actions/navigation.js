import {
  SELECT_TAB
} from '../constants/ActionTypes'

export const selectTab = index => ({
  type: SELECT_TAB,
  index
})