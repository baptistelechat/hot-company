import { SET_CURRENT_USER } from './typeCurrentUser'

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  }
}