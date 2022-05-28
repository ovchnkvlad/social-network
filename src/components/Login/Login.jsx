import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";


const LoginForm = (props) => {
    return (<form action="" onSubmit={props.handleSubmit}>
            <div className="form-item">
                <Field name="email" component="input" type="text" placeholder={"Email"} />
            </div>
            <div className="form-item">
                <Field name="password" component="input" type="password" placeholder={"Password"} />
            </div>
            <div className="form-item-chkbx">
                <Field name="rememberMe" component="input" type="checkbox" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
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

    const onSubmit = (formData) =>{
        props.login(formData.email,formData.password,formData.rememberMe);
    }

    return (
        <div className="login-form">
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
}

export default connect(null,{login})(Login);