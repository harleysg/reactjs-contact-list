import { ACTION } from "../Types";
import { initialState } from "../State";
/**
 * 
 * @param {object} state Parte del state que va a manipular
 * @param {string} action descripción de la acción a realizar
 */
export default function showFormReduce (state = initialState.form, action) {
  switch (action.type) {
    case ACTION.SHOW_FORM:
      return {
        show: !state.show
      }
    default:
      return state;
  }
}