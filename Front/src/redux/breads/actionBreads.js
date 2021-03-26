import axios from 'axios'
// import toast from 'react-hot-toast'
import { LOAD_BREADS_API, LOAD_BREADS_API_SUCCESS, LOAD_BREADS_API_ERROR } from './typeBreads'

export const loadBreadsApi = () => {
  return {
    type: LOAD_BREADS_API,
  }
}
export const loadBreadsApiSuccess = (breads) => {
  return {
    type: LOAD_BREADS_API_SUCCESS,
    payload: breads,

  }
}
export const loadBreadsApiError = (errorMessage) => {
  return {
    type: LOAD_BREADS_API_ERROR,
    payload: errorMessage,
  }
}

export const breadsApiCall = (user) => {
  return (dispatch) => {
    dispatch(loadBreadsApi)
    axios.get(process.env.REACT_APP_API_URL_BREADS)
      .then(res => {
        const data = res.data
        const breads = data.filter(bread => bread.userId === user.id)
        dispatch(loadBreadsApiSuccess(breads))
      })
      .catch(err => {
        dispatch(loadBreadsApiError(err))
      })
  }
}