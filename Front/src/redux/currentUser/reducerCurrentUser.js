import { SET_CURRENT_USER } from './typeCurrentUser'

const initialStateCurrentUser = {
  user: {
    "name": "Baptiste"
  }
}

const currentUserReducer = (state = initialStateCurrentUser, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user : action.payload
      }
    
    default:
      return state
  }
}

export default currentUserReducer