import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducer from './reducer'

const composeEnhancers = compose

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk), applyMiddleware(logger)))

export default store
