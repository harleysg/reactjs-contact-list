import defaultSrc from "../../assets/images/profile-default.png"

export const initialState = {
  contacts: {
    favorites: [],
    all: [],
    deleted: [],
    pending: false,
  },
  form: {
    show: false,
  },
  user: {
    active: true,
    favorite: false,
    id: null, 
    email: "", 
    first_name: "",
    last_name: "",
    avatar: defaultSrc,
    full_name: "",
  }
}