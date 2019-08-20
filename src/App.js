import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import FugitiveCard from './components/FugitiveCard'

class App extends Component {

  constructor() {
    super();
    this.state = {
      fugitives: []
    }
  }


  componentDidMount() {
    fetch('http://localhost:3000/fugitives')
    .then(response => response.json())
    .then(response => {
      this.setState({
        fugitives: response
      })
    })
  }

  updateFugitives = () => {
    fetch('http://localhost:3000/fugitives')
    .then(response => response.json())
    .then(response => {
      this.setState({
        fugitives: response
      })
    })
  }

  displayFugitives = () => {
    return this.state.fugitives.map(fugitive => <FugitiveCard key={fugitive.id} fugitive={fugitive} updateFugitives={this.updateFugitives}/>)
  }

  render() {
    return (
      <div className="container">
        <h1>Most Wanted</h1>
        <div className="card-deck">
        {this.displayFugitives()}
        </div>
      </div>
    );
  }
}

export default App;
