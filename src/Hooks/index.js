import { useEffect, useState } from "react"

export function useContacts({endPoint = "users"} = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState({})

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://reqres.in/api/${endPoint}`)
      .then(res => res.json())
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