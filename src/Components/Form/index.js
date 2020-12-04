import { useRef } from "react"

import { FormStyled, InputStyled, LabelStyled } from "./styles"

import { Button } from "../index"
import { useFormState } from "../../Hooks"

import { useFormConnect } from "./connect"

export default Form

const SharedAttributes = {
  required: true,
  autoComplete: "off"
}

function Form(){
  const { showForm, dispatch_showForm } = useFormConnect()
  const {loading, user, setUser, sendFormData} = useFormState()
  const form = useRef(null)

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setUser(user)
    sendFormData(form.current)
      .then(isFinish => {
        dispatch_showForm(isFinish)
      })
  }

  if (!showForm){
    return <></>
  }

  return <FormStyled onSubmit={handleOnSubmit} ref={form}>
    <InputStyled 
      {...SharedAttributes}
      type="text"
      name="user[first_name]" 
      placeholder="First name"
      defaultValue={user.first_name}
      onChange={e => setUser({...user, first_name: e.target.value})}/>

    <InputStyled 
      {...SharedAttributes}
      type="text"
      name="user[last_name]" 
      placeholder="Last name"
      defaultValue={user.last_name}
      onChange={e => setUser({...user, last_name: e.target.value})}/>

    <InputStyled 
      {...SharedAttributes}
      type="email"
      name="user[email]" 
      placeholder="Email"
      defaultValue={user.email}
      onChange={e => setUser({...user, email: e.target.value})}/>
      
    <LabelStyled>
      <small>Enable like favorite</small>
      <input 
        type="checkbox"
        checked={user.favorite}
        onChange={e => setUser({...user, favorite: e.target.checked})}
      />
    </LabelStyled>
    
    <Button label="save"/>
    
    { loading ? "Sending..." : null }

  </FormStyled>
}