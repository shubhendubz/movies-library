import React from 'react';
import LoginForm from './loginForm';

const HomePage = () => {
    return (
        <div className="container-fluid mt-5">
            <div className="row pt-5">
                <div className="col-md-7 rounded login">
                    <img className="w-100 h-100 rounded" src="https://t3.ftcdn.net/jpg/02/20/14/38/360_F_220143804_fc4xRygvJ8bn8JPQumtHJieDN4ORNyjs.jpg" alt="welcome"/>
                </div>
                <div className="col-md-3 rounded text-light login">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

export default HomePage;