import React, { Component } from 'react'

export default class FugitiveCard extends Component {

  displayAliases = () => {
    return (
      <ul>
        {this.props.fugitive.aliases.map( alias => <li>{alias.name}</li>)}
      </ul>
      );
  }

  displayCharges = () => {
    return (
      <ul>
        {this.props.fugitive.charges.map( charge => <li>{charge.name}</li>)}
      </ul>
      );
  }

  displayCapture = () => {
    if(this.props.fugitive.captured) {
      return "Yes"
    } else {
      return "No"
    }
  }

  render() {
    const { fugitive } = this.props

    return (
      <div className="card">
        <div className="card-header">
          <h4>{fugitive.name}</h4>
        </div>

        <img src={fugitive.image} className="card-img-top"/>
        <div className="card-body" key={fugitive.id}>
          <p className="card-text"> Charge(s): {this.displayCharges()}</p>
          <p className="card-text"> Aliases: {this.displayAliases()}</p>
          <p className="card-text"> Height: {fugitive.height}</p>
          <p className="card-text"> Weight: {fugitive.weight}</p>
          <p className="card-text"> Race: {fugitive.race}</p>
          <p className="card-text"> Hair: {fugitive.hair}</p>
          <p className="card-text"> Eyes: {fugitive.eyes}</p>
          <p className="card-text"> Sex: {fugitive.sex}</p>
          <p className="card-text"> Captured: {this.displayCapture()}</p>
        </div>
      </div>
    );
  }
};
