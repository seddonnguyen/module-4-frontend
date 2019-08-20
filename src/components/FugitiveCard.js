import React, { Component } from 'react'

export default class FugitiveCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      charge: "",
      alias: ""
    }
  }

  displayAliases = () => {
    return (
      <ul>
        {this.props.fugitive.aliases.map( (alias, index) => <li key={index}>{alias.name}</li>)}
      </ul>
      );
  }

  displayCharges = () => {
    return (
      <ul>
        {this.props.fugitive.charges.map( (charge, index) => <li key={index}>{charge.name}</li>)}
      </ul>
      );
  }

  handleChargeChange = (event) => {
    this.setState({
      charge: event.target.value
    });
  }

  handleChargeSubmit = (event) => {
    const url = "http://localhost:3000/charges"

    event.preventDefault();

    const charge = {
      fugitive_id: this.props.fugitive.id,
      name: this.state.charge
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(charge)
    }).then(response => {
        this.props.updateFugitives()
        this.setState({
        charge: ""
      });
    })
  }

  handleAliasChange = (event) => {
    this.setState({
      alias: event.target.value
    });
  }

  handleAliasSubmit = (event) => {
    const url = "http://localhost:3000/aliases"

    event.preventDefault();

    const charge = {
      fugitive_id: this.props.fugitive.id,
      name: this.state.alias
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(charge)
    }).then(response => {
        this.props.updateFugitives()
        this.setState({
        alias: ""
      });
    })
  }

  render() {
    const { fugitive } = this.props

    return (
      <div className="card">
        <div className="card-header">
          <h4>{fugitive.name}</h4>
        </div>

        <img src={fugitive.image} className="card-img-top" alt=""/>
        <div className="card-body" key={fugitive.id}>
          <p className="card-text"> Charge(s):</p>
          {this.displayCharges()}
          <div className="form-group">
            <form className="form-inline" onSubmit={this.handleChargeSubmit}>
              <input type="text" className="form-control" value={this.state.charge} onChange={this.handleChargeChange} />
              <button type="submit" className="btn btn-primary m-2">Add</button>
            </form>
          </div>
          <p className="card-text"> Aliases:</p>
           {this.displayAliases()}
          <div className="form-group">
            <form className="form-inline" onSubmit={this.handleAliasSubmit}>
              <input type="text" className="form-control" value={this.state.alias} onChange={this.handleAliasChange} />
              <button type="submit" className="btn btn-primary m-2">Add</button>
            </form>
          </div>
          <p className="card-text"> Height: {fugitive.height}</p>
          <p className="card-text"> Weight: {fugitive.weight}</p>
          <p className="card-text"> Race: {fugitive.race}</p>
          <p className="card-text"> Hair: {fugitive.hair}</p>
          <p className="card-text"> Eyes: {fugitive.eyes}</p>
          <p className="card-text"> Sex: {fugitive.sex}</p>
          <p className="card-text"> Captured: {fugitive.captured}</p>
        </div>
      </div>
    );
  }
};
