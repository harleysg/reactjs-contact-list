
export function FILTER_RESPONSE({ data /*object*/, newData /*Array*/ }) {
  const status = { favorite: false, active: true };

  const newContactList = newData.map((contact) => {
    const full_name = `${contact.first_name || ""} ${contact.last_name || ""}`;
    return { ...status, ...contact, full_name };
  });
  data.full_contacts = newContactList;

  return data;
}

export const REDUCE_ARRAYS = (acc, cur) => [...acc, ...cur]

export function FETCH_ALL_PAGES() {
  let newData = [];
  return Promise.all([
      fetch(`https://reqres.in/api/users?page=1`).then((res) => res.json()),
      fetch(`https://reqres.in/api/users?page=2`).then((res) => res.json())
    ])
      .then((response) => {
        newData = response.map((res) => res.data).reduce(REDUCE_ARRAYS);
        return { data: response, newData };
      })
      .then(FILTER_RESPONSE)
}

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