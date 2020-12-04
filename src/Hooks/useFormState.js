import { useState } from "react"

import { FETCH_CREATE_USER } from "../Services"

const USER = {
  email: "", 
  first_name: "",
  last_name: "",
  avatar: "",
  favorite: false
}

export default function useFormState(){
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(USER)
  const [response, setResponse] = useState({})

  function sendFormData(formRef){
    setLoading(true)
    return FETCH_CREATE_USER(user)
    .then(res => {
      setResponse(res)
      setLoading(false)
      setUser(USER)
      formRef.reset()
      return true
    })
    .catch(e => {
      console.error(e)
    })
  }

  return {
    loading,
    response,
    sendFormData,
    user,
    setUser
  }
}