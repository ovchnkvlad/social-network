import React from 'react';
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import {Field, reduxForm} from "redux-form";

const Dialogs = ({dialogs, messages, sendNewMessage}) => {

    const onAddMessageSubmit = (values) => {
        sendNewMessage(values.newMessageBody);
    }
    return (<section className="dialogs-wrapper">
        <div className="dialogs-nav">
            <h2>Dialogs</h2>

            {dialogs.map(item => <DialogItem key={item.id} id={item.id} name={item.name}/>)}

        </div>
        <div className="dialogs-content">
            {messages.map(message => <MessageItem id={message.id} key={message.id} text={message.text}
                                                  date={message.createdAt}/>)}

            <div className="message-form">
                <AddMessageFormRedux onSubmit={onAddMessageSubmit}/>
            </div>
        </div>
    </section>)
};


const AddMessageForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <Field component="textarea" name="newMessageBody" placeholder="Your message"/>
        <button className='btn'>Send</button>
    </form>)
}

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)


export default Dialogs;