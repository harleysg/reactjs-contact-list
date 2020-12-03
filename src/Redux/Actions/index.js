import { ACTION } from"../Types"

export function TOGGLE_FORM (payload) {
  return ({
    type: ACTION.SHOW_FORM,
    payload
  })
}

export const GET_CONTACTS = payload => {
  return ({
    type: ACTION.GET_CONTACT_API,
    payload
  })
}