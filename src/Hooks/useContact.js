import { useEffect, useState } from "react"

import { FILTER_RESPONSE, REDUCE_ARRAYS } from "../Services"


export default function useContact() {
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    let newData = [];
    setLoading(true);
    Promise.all([
      fetch(`https://reqres.in/api/users?page=1`).then((res) => res.json()),
      fetch(`https://reqres.in/api/users?page=2`).then((res) => res.json())
    ])
      .then((response) => {
        newData = response.map((res) => res.data).reduce(REDUCE_ARRAYS);
        return { data: response, newData };
      })
      .then(FILTER_RESPONSE)
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