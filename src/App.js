import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import EditFugitive from './components/EditFugitive'
import AddFugitive from './components/AddFugitive'
import AppNotFound from './components/AppNotFound'
import Wanted from './components/Wanted'
import Captured from './components/Captured'

class App extends Component {

  constructor() {
    super();
    this.state = {
      fugitives: [],
      fugitive: {},
      newFugitive: false
    }
  }


  componentDidMount() {
    fetch('https://obscure-mesa-62718.herokuapp.com/fugitives')
    .then(response => response.json())
    .then(response => {
      this.setState({
        fugitives: response
      })
    })
  }


  editFugitive = (fugitive) => {
    this.setState({
      fugitive
    })
  }

  resetFugitive = () => {
    fetch('https://obscure-mesa-62718.herokuapp.com/fugitives')
    .then(response => response.json())
    .then(response => {
      this.setState({
        fugitives: response,
        fugitive: {},
        newFugitive: false
      })
    })
  }

  handleAddFugitive = () => {
    this.setState({
      newFugitive: true
    });
  }

  displayView = () => {
    if(!this.state.fugitive.id && !this.state.newFugitive) {
      return (
        <Router>
          <div>
            <button className="btn btn-primary m-2"
                    onClick={this.handleAddFugitive}>Add Fugitive
            </button>
            <Link className="btn btn-primary m-2" to="/">Wanted</Link>
            <Link className="btn btn-primary m-2" to="/captured">Captured</Link>
          </div>
          <Switch>
            <Route exact path="/" render={()=> <Wanted
                                                  fugitives={this.state.fugitives}
                                                  fugitive={this.state.fugitive}
                                                  updateFugitives={this.resetFugitive}
                                                  editFugitive={this.editFugitive}
                                                />} />
            <Route path="/captured" render={()=> <Captured
                                                    fugitives={this.state.fugitives}
                                                    fugitive={this.state.fugitive}
                                                    updateFugitives={this.resetFugitive}
                                                    editFugitive={this.editFugitive}
                                                  />} />
            <Route component={ AppNotFound } />
          </Switch>
        </Router>
        );
    }
    else if (this.state.newFugitive) {
      return <AddFugitive
                backToMain={this.resetFugitive}
                updateFugitive={this.resetFugitive}
              />
    }
    else {
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
