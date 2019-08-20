import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import FugitiveCard from './components/FugitiveCard'
import EditFugitive from './components/EditFugitive'

class App extends Component {

  constructor() {
    super();
    this.state = {
      fugitives: [],
      fugitive: {}
    }
  }


  componentDidMount() {
    fetch('http://localhost:3000/fugitives')
    .then(response => response.json())
    .then(response => {
      this.setState({
        fugitives: response,
        fugitive: {},
        newFugitive: false
      })
    })
  }


  editFugitive = (fugitive) => {
    this.setState({
      fugitive
    })
  }

  displayFugitives = () => {
    return this.state.fugitives.map(fugitive => <FugitiveCard
                                                  key={fugitive.id}
                                                  fugitive={fugitive}
                                                  updateFugitives={this.resetFugitive}
                                                  editFugitive={this.editFugitive}
                                                />)
  }

  resetFugitive = () => {
    fetch('http://localhost:3000/fugitives')
    .then(response => response.json())
    .then(response => {
      this.setState({
        fugitives: response,
        fugitive: {},
        newFugitive: false
      })
    })
  }

  displayView = () => {
    if(!this.state.fugitive.id && !this.state.newFugitive) {
      return (
              <div className="card-deck">
                {this.displayFugitives()}
              </div>
              );
    }
    else if (this.state.newFugitive) {

    }
    else {
          console.log(this.state.fugitive)
      return <EditFugitive
                fugitive={this.state.fugitive}
                backToMain={this.resetFugitive}
                updateFugitive={this.resetFugitive}
              />
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Most Wanted</h1>
        {this.displayView()}
      </div>
    );
  }
}

export default App;
