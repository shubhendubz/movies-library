import React from 'react';
import Joi from 'joi-browser';
import Form from '../common/form';

class RegisterForm extends Form {
    state = {
        data: { username: "", password: "", name: "" },
        errors: {}
    };

    schema = {
        username: Joi.string().alphanum().min(3).max(15).required().label('Username'),
        password: Joi.string().alphanum().min(3).max(15).required().label('Password'),
        name: Joi.string().required().label('Name')
    };

    doSubmit = () => {
        console.log("Submitted");
    };

    render() {
        return (
            <div className="col-md-3 rounded text-light login mt-5">
                <form onSubmit={this.handleSubmit}>
                    <h3>Register</h3>

                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password","password")}
                    {this.renderInput("name", "Name")}
                    {this.renderButton("Register")}

                    {/* <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p> */}
                </form>
            </div>
        );
    }
}

export default RegisterForm;