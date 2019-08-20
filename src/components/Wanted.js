import React , {Component} from 'react';
import FugitiveCard from './FugitiveCard'


export default class Wanted extends Component {

  displayFugitives = () => {
    return this.props.fugitives
                      .filter(fugitive => fugitive.captured.toLowerCase().trim() === "no")
                      .map(fugitive => <FugitiveCard
                                          key={fugitive.id}
                                          fugitive={fugitive}
                                          updateFugitives={this.props.updateFugitives}
                                          editFugitive={this.props.editFugitive}
                                        />)
  }

    render() {
      return (
        <div className="home">
          <div className="card-deck">
            {this.displayFugitives()}
          </div>
        </div>
    );
  }
}