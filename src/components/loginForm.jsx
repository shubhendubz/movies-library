import React from 'react';
import Joi from 'joi-browser';
import Form from './../common/form';
class LoginForm extends Form {
    state = {
        // Todo: null or undefined cannot be used for controlled elements
        data: { username: '', password: '' },
        errors: {}

    };

    schema = {
        username: Joi.string().alphanum().min(3).max(15).required().label('Username'),
        password: Joi.string().alphanum().min(3).max(15).required().label('Password')
    };

    doSubmit = () => {
        console.log('form submitted');
    };


    render() {
        return (
            <div className="col-md-3 rounded text-light login mt-5">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="text-warning text-center mb-5">Sign In</h2>

                    {this.renderInput("username","Username")}
                    {this.renderInput("password","Password","password")}
                    {this.renderButton('Login')}


                    {/* <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>
                    </div> */}
                    {/* <Input
                            name="remember"
                            checked={data.remember}
                            label="Remember Me"
                            type="checkbox"
                            onChange={this.handleChange}
                        /> */}


                    {/* <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p> */}
                </form>
            </div>
        );
    }
}

export default LoginForm;