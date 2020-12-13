import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { TOGGLE_PENDING, NEW_CONTACT } from "../Redux/Actions";
import { initialState } from "../Redux/State";
import { FETCH_CREATE_USER } from "../Services"

export default function useFormState(){
  // const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(initialState.user)
  const [response, setResponse] = useState({})
  const dispatch = useDispatch()
  const loading = useSelector(state => state.contacts.pending)
  
  function sendFormData(formRef){
    dispatch(TOGGLE_PENDING(true))
    return FETCH_CREATE_USER({...user, full_name: `${user.first_name} ${user.last_name}`, active: true})
    .then(res => {
      setResponse(res)
      dispatch(NEW_CONTACT(res))
      setUser(initialState.user)
      formRef.reset()
      dispatch(TOGGLE_PENDING(false))
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