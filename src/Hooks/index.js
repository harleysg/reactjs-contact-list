import { useEffect, useState } from "react"

import { FILTER_RESPONSE } from "../Services"

export function useContacts({endPoint = "users"} = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState({})

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://reqres.in/api/${endPoint}`)
      .then(res => res.json())
      .then(FILTER_RESPONSE) // Include { favorites: boolean, full_name: string }
      .then(res => {
        setList(res)
        setIsLoading(false)
        setIsError(false)
      }).catch(e => {
        setIsLoading(false)
        setIsError(true)
        console.error(e)
      })
  }, [endPoint])
    
  return {
    list,
    isLoading,
    isError
  }
}

export function useShowForm() {
  const [show, setShow] = useState(false)
  return {
    show, setShow
  }
}