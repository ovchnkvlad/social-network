import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControlls";
import {maxLengthCreator, required} from "../../utils/validators";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name="newMessageBody" placeholder="Your message" validate={[required,maxLength50]}/>
        <button className='btn'>Send</button>
    </form>)
};
export default reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)
