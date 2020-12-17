
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";

import reducer from "../Redux/Reducers/contacts.reducer"
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
    dispatch(reducer.action.pending(true))
    FETCH_ALL_PAGES()
    .then(data => {
      const contacts = data.full_contacts;
      dispatch(reducer.action.get_contacts(contacts))
      dispatch(reducer.action.pending(false))
    }).catch((e) => {
      dispatch(reducer.action.pending(false))
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