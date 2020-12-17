import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import reducer from "../Redux/Reducers/contacts.reducer";
import { initialState } from "../Redux/State";
import { FETCH_CREATE_USER } from "../Services"

export default function useFormState(){
  // const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(initialState.user)
  const [response, setResponse] = useState({})
  const dispatch = useDispatch()
  const loading = useSelector(state => state.contacts.pending)
  
  function sendFormData(formRef){
    dispatch(reducer.action.pending(true))
    return FETCH_CREATE_USER({...user, full_name: `${user.first_name} ${user.last_name}`, active: true})
    .then(res => {
      setResponse(res)
      dispatch(reducer.action.new_contact(res))
      setUser(initialState.user)
      formRef.reset()
      dispatch(reducer.action.pending(false))
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