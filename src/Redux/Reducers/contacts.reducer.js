import { createSlice } from '@reduxjs/toolkit'

import { initialState } from "../State";
import {
  delete_contact,
  add_favorites,
  remove_favorites,
  restore_contacts,
  new_contact,
  get_contacts_api,
  pending
} from "../Actions/contacts.actions"

const contactsReducer = createSlice({
  name: "contact",
  initialState: initialState.contacts,
  reducers: {
    add_favorites,
    remove_favorites,
    delete_contact,
    restore_contacts,
    new_contact,
    get_contacts_api,
    pending,
  }
})

const reducer = {
  reducer: contactsReducer.reducer,
  action: {
    get_contacts: contactsReducer.actions.get_contacts_api,
    pending: contactsReducer.actions.pending,
    add_favorites: contactsReducer.actions.add_favorites,
    remove_favorites: contactsReducer.actions.remove_favorites,
    delete_contact: contactsReducer.actions.delete_contact,
    restore_contacts: contactsReducer.actions.restore_contacts,
    new_contact: contactsReducer.actions.new_contact
  }
}

export default reducer