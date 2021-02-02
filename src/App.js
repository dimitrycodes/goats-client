import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import config from './config';
import ApiContext from './ApiContext';
import logo from './logo.svg';
import './App.css';

import Home from './Views/Home'

class App extends Component {
  state = {
    sports: []
  }

  componentDidMount(){
    Promise.all([
      fetch(`${config.API_ENDPOINT}/sports`)
    ])
    .then(([sportsResponse]) => {
      if(!sportsResponse.ok) return sportsResponse.json().then(e => Promise.reject(e));
      return Promise.all([sportsResponse.json()]);
    })
    .then(([sports]) => {
      this.setState({sports})
      console.log(sports, 'this is line 24 app.js')
    })
    .catch((error) => {console.log({error})})
  }
  handleAddSports = (sports) => {
    this.setState({
      sports: [...this.state.sports, sports]
    })
  };
  handleDeleteSports = (sportsId) => {
    this.setState({
      sports: this.state.sports.filter((sport) => sport.id !== sportsId) 
    });
  };
  handleUpdateSports = (updateSports) => {
    const newUpdatedSports = this.state.sports.map((sport) => 
      sport.id === updateSports.id ? updateSports : sport 
    );
    this.setState({
      sports: newUpdatedSports,
    })
  };

  render() {
    const value = {
      sports: this.state.sports,
      addSports: this.handleAddSports,
      deleteSports: this.handleDeleteSports,
      updateSports: this.handleUpdateSports,
    };
    console.log(value, 'this is the render value')
    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <Router>
            <header className="App-header">
              <h1>Goat App</h1>
              <nav className="navbar">
                <a href="/home" className="">
                  Home
                </a>
              </nav>
            </header>
            <div className="main">
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
          </Router>
        </div>
      </ApiContext.Provider>
    );
  }
}
export default App;
