import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessageCreator} from "../../Redux/dialogs-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendNewMessage: (text) => {
            dispatch(sendMessageCreator(text));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);