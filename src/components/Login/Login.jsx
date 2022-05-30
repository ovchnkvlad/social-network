import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Input} from "../common/FormControlls";
import {required} from "../../utils/validators";
import {Redirect} from "react-router";


const LoginForm = (props) => {
    return (<form action="" onSubmit={props.handleSubmit}>
            <div className="form-item">
                <Field name="email" component={Input} type="text" placeholder={"Email"} validate={[required]}/>
            </div>
            <div className="form-item">
                <Field name="password" component={Input} type="password" placeholder={"Password"}
                       validate={[required]}/>
            </div>
            <div className="form-item-chkbx">
                <Field name="rememberMe" component={Input} type="checkbox"/>
                <label htmlFor="remember-me">Remember me</label>
            </div>
            {props.error ? <div className="form-error-description ">
                <span>{props.error}</span>
            </div> : null}
            <div className="form-item-btn">
                <button className='btn'>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }
    return (
        <div className="login-form">
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);