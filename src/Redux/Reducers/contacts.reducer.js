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
        all: state.all.filter(contact =>  {
          if(contact.id === action.payload.id){
            contact.favorite = true
          }
          return contact
        }),
        favorites: state.all.filter(contact => contact.favorite === true),
      };
    case ACTION.REMOVE_FAVORITES:
      return {
        ...state,
        all: state.all.filter(contact =>  {
          if(contact.id === action.payload.id){
            contact.favorite = false
          }
          return contact
        }),
        favorites: state.all.filter(contact => contact.favorite === true),
      };
    case ACTION.DELETE_CONTACT:
      return {
        ...state,
        all: state.all.filter(contact => {
          if(contact.id !== action.payload.id){
           return contact
          }
          contact.active = false
          state.deleted.push(contact)
          return null
        }),
        favorites: state.favorites.filter(contact => contact.id !== action.payload.id),
      };
    case ACTION.SHOW_CONTACTS_DELETED:
      return {
        ...state,
        all: (() => {
          const reset_all_state = state.all.filter(contact => {
            contact.favorite = false
            return contact
          })
          const reset_deleted_state = state.deleted.filter(contact => {
            contact.active = true
            return contact
          })

          return [...reset_all_state, ...reset_deleted_state]
        })(),
        deleted: [],
        favorites: [],
      };
    case ACTION.NEW_CONTACT:
      return {
        ...state,
        all: state.all.concat(action.payload),
        favorites: state.favorites.concat(action.payload)
      };
    case ACTION.GET_CONTACT_API:
      return {
        ...state,
        all: action.payload
      };
    case ACTION.PENDING:
      return {
        ...state,
        pending: action.payload
      }
    default:
      return state;
  }
}