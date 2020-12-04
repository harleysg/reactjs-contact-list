import { ACTION } from "../Types";
import { initialState } from "../State";
/**
 * 
 * @param {object} state Parte del state que va a manipular
 * @param {string} action descripción de la acción a realizar
 */
export default function contactsReducers(state = initialState.contacts, action) {
  switch (action.type) {
    case ACTION.ADD_FAVORITES:
      return {
        ...state,
      };
    case ACTION.REMOVE_FAVORITES:
      return {
        ...state,
      };
    case ACTION.DELETE_CONTACT:
      return {
        ...state,
      };
    case ACTION.NEW_CONTACT:
      return {
        ...state,
      };
    case ACTION.GET_CONTACT_API:
      return {
        ...state,
        all: action.payload
      };
    case ACTION.PENDING:
      return {
        show: !state.pending
      }
    default:
      return state;
  }
}