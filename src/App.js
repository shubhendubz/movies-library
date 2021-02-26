import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Rental from './components/rental';
import NotFound from './components/notFound';
import LiveTheatre from './components/liveTheatre';
import NavBar from './components/navBar';
import HomePage from './components/homePage';
import RegisterForm from './components/registerForm';
import WatchList from './components/watchlist';

class App extends Component {

  render() {
    return (
      <div className="App container-fluid">
        <div className="row ">
          <div className="col navlist ">
            <NavBar />
          </div>
        </div>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route path="/movies" component={LiveTheatre} />
          <Route path="/rental" render={() => <Rental />} />
          <Route path="/Watchlist" component={WatchList} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/not-found" exact component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;