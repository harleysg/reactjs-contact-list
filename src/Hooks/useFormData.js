import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { TOGGLE_PENDING } from "../Redux/Actions";
import { FETCH_CREATE_USER } from "../Services"

export default function useFormData(){
  const dispatch = useDispatch()
  const loading = useSelector(state => state.contacts.pending)
  const [response, setResponse] = useState({})

  function sendFormData(formRef){
    const data = new FormData(formRef)
    dispatch(TOGGLE_PENDING(true))
    FETCH_CREATE_USER(data)
    .then(res => {
      console.log("🚀 ~ file: index.js ~ line 32 ~ sendFormData ~ res", res)
      setResponse(res)
      dispatch(TOGGLE_PENDING(false))
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