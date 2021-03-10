import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
// import Movies from '../components/Movies';



const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark mx-0  ">
            <div className="d-flex">
                <div className=" float-left">
                    <Link className="navbar-brand p-1 " to="/">
                        <span>
                            <img src={logo} className="logo rounded-circle" alt="logo" />
                            <span className="pl-3 text-center"> Live Theatre </span>
                        </span>
                    </Link>
                </div>
                <div className="float-right">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse col-md" id="navbarNav">
                    <div className="navbar-nav">

                        <NavLink className="nav-link" exact to="/" >Home</NavLink>

                        <NavLink className="nav-link" to="/movies" >Movies</NavLink>

                        <NavLink className="nav-link" to="/rental" >Rental</NavLink>

                        <NavLink className="nav-link" to="/wishlist" >Wishlist</NavLink>

                        <NavLink className="nav-link" to="/login" >Login</NavLink>

                        <NavLink className="nav-link" to="/register" >Register</NavLink>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;