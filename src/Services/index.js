
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