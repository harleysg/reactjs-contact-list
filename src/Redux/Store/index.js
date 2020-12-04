import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk"

import rootReducers from "../Reducers"

import { initialState } from "../State"

const middleware = [thunk]

export default createStore(
  rootReducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
