import { connect } from "react-redux";

import formReducer from "../../Redux/Reducers/form.reducer";

export default connect(null, mapDispathToProps);

function mapDispathToProps(displatch) {
    return {
        handleShowForm () {
            displatch(formReducer.showForm())
        }
    }
}