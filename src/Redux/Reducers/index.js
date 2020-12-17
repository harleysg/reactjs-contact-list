import { combineReducers } from '@reduxjs/toolkit'
import form from "./form.reducer"
import contacts from "./contacts.reducer"

/**
 * @description combineReducer recibe la estructura del state y por key se asigna su correspondiente reducer
 */
export default combineReducers({
  contacts: contacts.reducer,
  form: form.reducer
})
