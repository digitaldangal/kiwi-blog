import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../constants/ActionTypes'
import blog from '../api/blog'

const loginRequest = () => ({
  type: LOGIN_REQUEST,
})

const loginSuccess = () => ({
  type: LOGIN_SUCCESS
})

const loginFailure = () => ({
  type: LOGIN_FAILURE
})

export const loginAsyn = (username, password) => dispatch => {
  dispatch(loginRequest())
  return blog.login(username, password,
    () => dispatch(loginSuccess()),
    () => dispatch(loginFailure()))
}