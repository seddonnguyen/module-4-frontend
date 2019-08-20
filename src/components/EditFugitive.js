import React, { Component } from 'react'

export default class EditFugitive extends Component {

  constructor(props) {
    super(props);

    const {fugitive} = this.props

    this.state = {
      image: fugitive.image,
      name: fugitive.name,
      height: fugitive.height,
      weight: fugitive.weight,
      race: fugitive.race,
      hair: fugitive.hair,
      eyes: fugitive.eyes,
      sex: fugitive.sex,
      captured: fugitive.captured
    }
  }

  handleImageChange = event => {
    this.setState({
      image: event.target.value
    });
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleHeightChange = event => {
    this.setState({
      height: event.target.value
    });
  }

  handleWeightChange = event => {
    this.setState({
      weight: event.target.value
    });
  }

  handleRaceChange = event => {
    this.setState({
      race: event.target.value
    });
  }

  handleHairChange = event => {
    this.setState({
      hair: event.target.value
    });
  }

  handleEyesChange = event => {
    this.setState({
      eyes: event.target.value
    });
  }

  handleSexChange = event => {
    this.setState({
      sex: event.target.value
    });
  }

  handleCapturedChange = event => {
    this.setState({
      captured: event.target.value
    });
  }

  handleSaveSubmit = event => {
    const url = `http://localhost:3000/fugitives/${this.props.fugitive.id}`

    event.preventDefault();

    const fugitive = {
      image: this.state.image,
      name: this.state.name,
      height: this.state.height,
      weight: this.state.weight,
      race: this.state.race,
      hair: this.state.hair,
      eyes: this.state.eyes,
      sex: this.state.sex,
      captured: this.state.captured
    }

    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(fugitive)
    }).then(response => {
        this.props.updateFugitive()
    })
  }

  render() {

    return (
      <div>
        <button className="btn btn-primary m-2" onClick={this.props.backToMain}>back</button>
        <form onSubmit={this.handleSaveSubmit}>
          <img src={this.state.image} alt=""/>
          <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
                type="text"
                className="form-control"
                id="image"
                value={this.state.image}
                onChange={this.handleImageChange}
          />
          </div>

          <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
                type="text"
                className="form-control"
                id="name"
                value={this.state.name}
                onChange={this.handleNameChange}
          />
          </div>

          <div className="form-group">
          <label htmlFor="height">Height:</label>
          <input
                type="text"
                className="form-control"
                id="height"
                value={this.state.height}
                onChange={this.handleHeightChange}
          />
          </div>

          <div className="form-group">
          <label htmlFor="weight">Weight:</label>
          <input
                type="text"
                className="form-control"
                id="weight"
                value={this.state.weight}
                onChange={this.handleWeightChange}
          />
          </div>

          <div className="form-group">
          <label htmlFor="race">Race:</label>
          <input
                type="text"
                className="form-control"
                id="race"
                value={this.state.race}
                onChange={this.handleRaceChange}
          />
          </div>

          <div className="form-group">
          <label htmlFor="hair">Hair:</label>
          <input
                type="text"
                className="form-control"
                id="hair"
                value={this.state.hair}
                onChange={this.handleHairChange}
          />
          </div>

          <div className="form-group">
          <label htmlFor="eyes">Eyes:</label>
          <input
                type="text"
                className="form-control"
                id="eyes"
                value={this.state.eyes}
                onChange={this.handleEyesChange}
          />
          </div>

          <div className="form-group">
          <label htmlFor="sex">Sex:</label>
          <input
                type="text"
                className="form-control"
                id="sex"
                value={this.state.sex}
                onChange={this.handleSexChange}
          />
          </div>

          <div className="form-group">
          <label htmlFor="captured">Captured:</label>
          <input
                type="text"
                className="form-control"
                id="captured"
                value={this.state.captured}
                onChange={this.handleCapturedChange}
          />
          </div>

          <button type="submit" className="btn btn-primary m-2">Save</button>
        </form>
      </div>
    );
  }
};
