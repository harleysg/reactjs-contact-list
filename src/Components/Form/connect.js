import { useSelector, useDispatch } from "react-redux";

import { TOGGLE_FORM } from "../../Redux/Actions";
import { useFormState } from "../../Hooks"

export function useFormConnect() {
  const {loading, user, setUser, sendFormData} = useFormState()
  const showForm = useSelector(state => state.form.show)
  const dispatch = useDispatch()
  
  const dispatch_showForm = (payload)  => dispatch(TOGGLE_FORM(payload))

  function handleFormSubmit (form) {
    sendFormData(form)
      .then(isFinish => {
        dispatch_showForm(isFinish)
      })
  }
  
  return {
    showForm,
    dispatch_showForm,
    loading,
    handleFormSubmit,
    user,
    setUser
  }
}

// import { ACTION } from "../../Redux/Types";
// export default connect(mapStateToProps, mapDispathToProps)
  
// function mapDispathToProps(displatch) {
//   return {
//     handleShowForm: function () {
//         displatch({
//             type: ACTION.SHOW_FORM
//         })
//     }
//   }
// }

// function mapStateToProps(state) { 
//   return ({
//     showForm: state.form.show
//   })
// }