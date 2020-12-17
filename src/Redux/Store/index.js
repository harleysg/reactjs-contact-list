import { applyMiddleware, configureStore, compose } from '@reduxjs/toolkit'

import thunk from "redux-thunk"
import rootReducers from "../Reducers"

import { initialState } from "../State"

const middleware = [thunk]

export default configureStore({
  reducer: rootReducers,
  preloadedState: initialState,
  middleware: compose(
    applyMiddleware(...middleware),
    process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
})