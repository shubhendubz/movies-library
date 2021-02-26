import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Rental from './components/rental';
import Completed from './components/completed';
import NotFound from './components/notFound';
import LiveTheatre from './components/liveTheatre';
import Movies from './components/Movies';
import NavBar from './components/navBar';
// import navRoutes from './routes/navRoutes';

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
          <Route exact path="/" render={() => <LiveTheatre />} />
          <Route path="/movies" component={Movies} />
          <Route path="/rental" render={() => <Rental />} />
          <Route path="/completed" component={Completed} />
          <Route path="/not-found" exact component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;