import { ACTION } from"../Types"

/**
 * 
 * @param {boolean} payload 
 */
export function TOGGLE_FORM (payload) {
  return ({
    type: ACTION.SHOW_FORM,
    payload
  })
}

/**
 * 
 * @param {boolean} payload 
 */
export const TOGGLE_PENDING = payload => {
  return ({
    type: ACTION.PENDING,
    payload
  })
}

/**
 * 
 * @param {array} payload - @type {[initialState.user]}
 */
export const GET_CONTACTS = payload => {
  return ({
    type: ACTION.GET_CONTACT_API,
    payload
  })
}

/**
 * 
 * @param {number} payload - @type {initialState.user.id}
 */
export const DELETE_CONTACTS = payload => {
  return ({
    type: ACTION.DELETE_CONTACT,
    payload: { id: payload }
  })
}

/**
 * 
 * @param {object} payload - @type {initialState.user}
 */
export const NEW_CONTACT = payload => {
  return ({
    type: ACTION.NEW_CONTACT,
    payload
  })
}

/**
 * 
 * @param {object} payload - @type {initialState.user}
 */
export const ADD_FAVORITES = payload => {
  return ({
    type: ACTION.ADD_FAVORITES,
    payload
  })
}

/**
 * 
 * @param {object} payload - @type {initialState.user}
 */
export const REMOVE_FAVORITES = payload => {
  return ({
    type: ACTION.REMOVE_FAVORITES,
    payload
  })
}