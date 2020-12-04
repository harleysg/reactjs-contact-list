
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";


import { GET_CONTACTS } from "../Redux/Actions";
import { FETCH_ALL_PAGES } from "../Services"

export function useGetContacts(){
  const [loading, setLoading] = useState(false)
  const contacts = useSelector(state => state.contacts.all)
  const dispatch = useDispatch()
  
  useEffect(() => {
    setLoading(true)
    FETCH_ALL_PAGES()
    .then(data => {
      const contacts = data.full_contacts;
      dispatch(GET_CONTACTS(contacts))
      setLoading(false)
    })
  }, [dispatch, setLoading])

  return {
    loading,
    contacts
  }
}

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