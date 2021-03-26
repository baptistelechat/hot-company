import { SET_CURRENT_BREAD } from './typeCurrentBread'

const initialStateCurrentBread = {
  bread: {
    "defaultCookingTime": 10,
    "userId": "1234",
    "breadType": "Pain",
    "cookingTime": 20
  }
}

const currentBreadReducer = (state = initialStateCurrentBread, action) => {
  switch (action.type) {
    case SET_CURRENT_BREAD:
      return {
        ...state,
        bread : action.payload
      }
    
    default:
      return state
  }
}

export default currentBreadReducer