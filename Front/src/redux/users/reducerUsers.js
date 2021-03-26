import { LOAD_USERS_API, LOAD_USERS_API_SUCCESS, LOAD_USERS_API_ERROR } from './typeUsers'

const initialStateUsers = {
  isLoading: false,
  users: [],
  error: '',
}

const usersReducer = (state = initialStateUsers, action) => {
  switch (action.type) {
    case LOAD_USERS_API:
      return {
        ...state,
        isLoading: true,
        users: [],
        error: ''
      }

      case LOAD_USERS_API_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
        error: ''
      }
      
      case LOAD_USERS_API_ERROR:
      return {
        ...state,
        isLoading: false,
        users: [],
        error: `💥 Failed to call API : ${action.payload}`
      }
    
    default:
      return state
  }
}

export default usersReducer