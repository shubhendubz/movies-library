import React from 'react';
import { NavLink } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import App from '../App';
import logo from '../images/logo.jpg';
// import Movies from '../components/Movies';
import Rental from './../components/rental';
import Completed from './../components/completed';
import NotFound from './../components/notFound';


const NavBar = () => {
    <Switch>
        <Route exact path="/" component={App} />
        {/* <Route path="/movies" component={Movies} /> */}
        <Route path="/rental" render={() => <Rental />} />
        <Route path="/completed" component={Completed} />
        <Route path="/not-found" exact component={NotFound} />
        <Redirect to="/not-found" />
    </Switch>
    return (
        <nav className="navbar navbar-expand-lg navbar-dark mx-0  ">
            <NavLink className="navbar-brand ml-3" exact to="/">
                <img src={logo} className=" logo rounded-circle" alt="logo"/>
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">

                    <NavLink className="nav-link" exact to="/" >Home</NavLink>


                    <NavLink className="nav-link" to="/movies" >Movies</NavLink>


                    <NavLink className="nav-link" to="/rental" >Rental</NavLink>


                    <NavLink className="nav-link" to="/completed" >Completed</NavLink>

                </div>
            </div>
        </nav>
    );
}

export default NavBar;