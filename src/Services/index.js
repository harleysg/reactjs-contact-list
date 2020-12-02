
export function FILTER_RESPONSE({ data /*object*/, newData /*Array*/ }) {
  const favoriteState = { favorite: false };

  const newContactList = newData.map((contact) => {
    const full_name = `${contact.first_name || ""} ${contact.last_name || ""}`;
    return { ...favoriteState, ...contact, full_name };
  });
  data.full_contacts = newContactList;

  return data;
}

export const REDUCE_ARRAYS = (acc, cur) => [...acc, ...cur]



export function FETCH_CREATE_USER(body/*Object*/) {
  return fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
}