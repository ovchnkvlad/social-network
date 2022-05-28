import React from 'react'
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
    return (<form action="" onSubmit={props.handleSubmit}>
            <div className="form-item">
                <Field name="login" component="input" type="text" placeholder={"Login"} />
            </div>
            <div className="form-item">
                <Field name="password" component="input" type="password" placeholder={"Password"} />
            </div>
            <div className="form-item-chkbx">
                <Field name="remember-me" component="input" type="checkbox" />
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
        console.log(formData)
    }

    return (
        <div className="login-form">
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
}

export default Login