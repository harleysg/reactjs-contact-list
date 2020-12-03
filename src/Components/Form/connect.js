import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { TOGGLE_FORM } from "../../Redux/Actions";

export function useFormConnect() {
  const [loading, setLoading] = useState()
  const showForm = useSelector(state => state.form.show)
  const dispatch = useDispatch()
  
  const dispatch_showForm = (payload)  => dispatch(TOGGLE_FORM(payload))
  
  return {
    showForm,
    dispatch_showForm,
    loading,
    setLoading
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