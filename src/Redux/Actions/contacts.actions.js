export function delete_contact(state, action){
  function updateContact(db, user){
    user.favorite = false;
    user.active = false;
    db.splice(db.indexOf(user), 1)
  }
  state.all.forEach(contact => {
    if(contact.id === action.payload.id){
      updateContact(state.all, contact);
      state.deleted.push(contact)
    };
  });
  action.payload.favorite === true && state.favorites.forEach(contact => {
    if(contact.id === action.payload.id) {
      updateContact(state.favorites, contact);
    }
  })
}
export function add_favorites(state, action){
  state.all.filter(contact =>  {
    if(contact.id === action.payload.id){
      contact.favorite = true
    }
    return contact
  })
  state.favorites = state.all.filter(contact => contact.favorite === true)
}
export function remove_favorites(state, action){
  state.all.filter(contact =>  {
    if(contact.id === action.payload.id){
      contact.favorite = false
    }
    return contact
  })
  state.favorites = state.all.filter(contact => contact.favorite === true)
}
export function restore_contacts(state){
  state.all = (() => {
    const reset_all_state = state.all.filter(contact => {
      contact.favorite = false
      return contact
    })
    const reset_deleted_state = state.deleted.filter(contact => {
      contact.active = true
      return contact
    })
    return [...reset_deleted_state, ...reset_all_state]
  })()
  state.deleted = []
  state.favorites = []
}
export function new_contact(state, action){
  state.all = [action.payload, ...state.all];
  if(action.payload.favorite === true) {
    state.favorites = [action.payload, ...state.favorites]
  }
}
export function get_contacts_api(state, action){
  state.all = action.payload
}
export function pending(state, action){
  state.pending = action.payload
}