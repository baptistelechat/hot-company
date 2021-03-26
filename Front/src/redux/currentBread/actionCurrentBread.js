import { SET_CURRENT_BREAD } from './typeCurrentBread'

export const setCurrentBread = (bread) => {
  return {
    type: SET_CURRENT_BREAD,
    payload: bread,
  }
}