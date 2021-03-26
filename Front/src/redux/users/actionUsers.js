import axios from 'axios'
// import toast from 'react-hot-toast'
import { LOAD_USERS_API, LOAD_USERS_API_SUCCESS, LOAD_USERS_API_ERROR } from './typeUsers'

export const loadUsersApi = () => {
  return {
    type: LOAD_USERS_API,
  }
}
export const loadUsersApiSuccess = (users) => {
  return {
    type: LOAD_USERS_API_SUCCESS,
    payload: users,

  }
}
export const loadUsersApiError = (errorMessage) => {
  return {
    type: LOAD_USERS_API_ERROR,
    payload: errorMessage,
  }
}

export const usersApiCall = () => {
  return (dispatch) => {
    dispatch(loadUsersApi)
    axios.get(process.env.REACT_APP_API_URL_USERS)
      .then(res => {
        dispatch(loadUsersApiSuccess(res.data))
      })
      .catch(err => {
        dispatch(loadUsersApiError(err))
      })
  }
}