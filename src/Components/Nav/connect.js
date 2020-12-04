import { connect } from "react-redux";

import { ACTION } from "../../Redux/Types";

export default connect(null, mapDispathToProps);

function mapDispathToProps(displatch) {
    return {
        handleShowForm: function (visible) {
            displatch({
                type: ACTION.SHOW_FORM,
                payload: visible
            })
        }
    }
}