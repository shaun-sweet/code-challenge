import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { formData, posting, formSubmitted, submitComplete } from './reducers'
const middleware = applyMiddleware(thunk, logger())



const reducers = combineReducers({
  formData,
  posting,
  formSubmitted,
  submitComplete
})
export default createStore(reducers, middleware);
