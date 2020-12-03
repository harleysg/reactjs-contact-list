import { combineReducers } from 'redux'
import formReducer from "./form.reducer"
import contactsReducers from "./contacts.reducer"

/**
 * @description combineReducer recibe la estructura del state y por key se asigna su correspondiente reducer
 */
export default combineReducers({
  contacts: contactsReducers,
  form: formReducer
})


