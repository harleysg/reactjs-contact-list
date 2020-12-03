import { connect } from "react-redux";
import { ACTION } from "../../Redux/Types";

export default connect(null, mapDsipatchToProps)

function mapDsipatchToProps(dispatch) {
  return {
    restoreContacts: function () {
      dispatch({
        type: ACTION.SHOW_CONTACTS_DELETED
      })
    }
  }
}