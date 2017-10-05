import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  RECEIVE_DASHBOARD,
  REQUEST_DASHBOARD,
} from '../constants/ActionTypes'
import blog from '../api/blog'

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
})

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
})

export const loginFailure = () => ({
  type: LOGIN_FAILURE
})

export const loginAsyn = (username, password) => dispatch => {
  dispatch(loginRequest())
  return blog.login(username, password,
    () => dispatch(loginSuccess()),
    () => dispatch(loginFailure()))
}

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