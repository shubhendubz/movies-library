import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.jpg';
// import Movies from '../components/Movies';



const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark mx-0  ">
            <div className="row">
                <div className="col-md-6 mt-1">
                    <NavLink className="navbar-brand p-1 " exact to="/">
                        <span>
                            <img src={logo} className="logo rounded-circle" alt="logo" />
                            <span className="pl-3 text-center"> Live Theatre </span>
                        </span>
                    </NavLink>
                </div>
                <div className="collapse navbar-collapse col-md-5" id="navbarNav">
                    <div className="navbar-nav">

                        <NavLink className="nav-link" exact to="/" >Home</NavLink>


                        <NavLink className="nav-link" to="/movies" >Movies</NavLink>


                        <NavLink className="nav-link" to="/rental" >Rental</NavLink>


                        <NavLink className="nav-link" to="/watchlist" >Wish-list</NavLink>

                    </div>
                </div>
                <div className="col-md-6">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;