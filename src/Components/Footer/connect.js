import { connect } from "react-redux";
import reducer from "../../Redux/Reducers/contacts.reducer";

export default connect(null, mapDsipatchToProps)

function mapDsipatchToProps(dispatch) {
  return {
    restoreContacts: function () {
      dispatch(reducer.action.restore_contacts())
    }
  }
}