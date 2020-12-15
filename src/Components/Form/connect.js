import { useSelector, useDispatch } from "react-redux";

import formReducer from "../../Redux/Reducers/form.reducer";
import { useFormState } from "../../Hooks"

export function useFormConnect() {
  const {loading, user, setUser, sendFormData} = useFormState()
  const showForm = useSelector(state => state.form.show)
  const dispatch = useDispatch()

  function handleFormSubmit (form) {
    sendFormData(form)
      .then(() => {
        dispatch(formReducer.showForm())
      })
  }
  
  return {
    showForm,
    loading,
    handleFormSubmit,
    user,
    setUser
  }
}