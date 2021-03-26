import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import usersReducer from './users/reducerUsers'
import currentUserReducer from './currentUser/reducerCurrentUser'
import breadsReducer from './breads/reducerBreads'
import currentBreadReducer from './currentBread/reducerCurrentBread'

const rootReducer = combineReducers({
  users: usersReducer,
  currentUser: currentUserReducer,
  breads: breadsReducer,
  currentBread: currentBreadReducer
})

// const store = createStore(rootReducer, applyMiddleware(thunk))
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store