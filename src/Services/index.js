
export function FILTER_RESPONSE(data /*object*/){
  const dataListContacts = data.data || []
  const state = { favorite: false }

  const newContactList = dataListContacts.map(contact => {
    const full_name = `${contact.first_name || ""} ${contact.last_name || ""}`
    return {...state, ...contact, full_name}
  })
  data.data = newContactList

  return data
}