import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { formData, posting, formSubmitted, submitComplete, formErrors, formState } from './reducers'
const middleware = applyMiddleware(thunk, logger())

const reducers = combineReducers({
  formData,
  formState,
})
export default createStore(reducers, middleware);
