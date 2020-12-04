import { useState } from "react"

import { FETCH_CREATE_USER } from "../Services"

export default function useFormData(){
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState({})

  function sendFormData(formRef){
    const data = new FormData(formRef)
    setLoading(true)
    FETCH_CREATE_USER(data)
    .then(res => {
      console.log("🚀 ~ file: index.js ~ line 32 ~ sendFormData ~ res", res)
      setResponse(res)
      setLoading(false)
      formRef.reset() // Reset all forms fieds 
    })
    .catch(e => {
      console.error(e)
    })  
  }

  return {
    loading,
    response,
    sendFormData
  }
}