import { LOAD_BREADS_API, LOAD_BREADS_API_SUCCESS, LOAD_BREADS_API_ERROR } from './typeBreads'

const initialStateBreads = {
  isLoading: false,
  breads: [],
  error: '',
}

const breadsReducer = (state = initialStateBreads, action) => {
  switch (action.type) {
    case LOAD_BREADS_API:
      return {
        ...state,
        isLoading: true,
        breads: [],
        error: ''
      }

      case LOAD_BREADS_API_SUCCESS:
      return {
        ...state,
        isLoading: false,
        breads: action.payload,
        error: ''
      }
      
      case LOAD_BREADS_API_ERROR:
      return {
        ...state,
        isLoading: false,
        breads: [],
        error: `💥 Failed to call API : ${action.payload}`
      }
    
    default:
      return state
  }
}

export default breadsReducer