import {
  RECEIVE_DASHBOARD,
  REQUEST_DASHBOARD,
} from '../constants/ActionTypes'
import blog from '../api/blog'

export const requestDashboard = () => ({
  type: REQUEST_DASHBOARD
})

export const receiveDashboard = json => ({
  type: RECEIVE_DASHBOARD,
  visit: json.visit,
  usage: json.usage,
  visitors: json.visitors
})

const fetchDashboard = () => dispatch => {
  dispatch(requestDashboard())
  return blog.fetchDashboard((json) => dispatch(receiveDashboard(json)))
}

const shouldFetchDashboard = state => {
  return state.dashboard.visitors === 0
}

export const fetchDashboardIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchDashboard(getState())) {
    return dispatch(fetchDashboard())
  }
}