
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";

import { GET_CONTACTS, TOGGLE_PENDING } from "../Redux/Actions";
import { FETCH_ALL_PAGES } from "../Services"

/**
 * @function useGetContacts
 * Redux
 */
export function useGetContacts(){
  const { contacts } = useSelector(state => ({
    contacts: state.contacts.all
  }))
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(TOGGLE_PENDING(true))
    FETCH_ALL_PAGES()
      .then(data => {
        const contacts = data.full_contacts;
        dispatch(GET_CONTACTS(contacts))
        dispatch(TOGGLE_PENDING(false))
      }).catch((e) => {
        dispatch(TOGGLE_PENDING(false))
        console.error(e)
      })
  }, [dispatch])

  return {
    contacts
  }
}

/**
 * @function useContact
 * Hooks
 */
export default function useContact() {
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setLoading(true);
    FETCH_ALL_PAGES()
      .then((data) => {
        const contacts = data.full_contacts;
        setContacts(contacts);
        setLoading(false);
        setIsError(false);
      })
      .catch((e) => {
        setLoading(false);
        setIsError(true);
        console.error(e);
      });
  }, []);

  return {
    contacts,
    isLoading,
    isError
  };
};