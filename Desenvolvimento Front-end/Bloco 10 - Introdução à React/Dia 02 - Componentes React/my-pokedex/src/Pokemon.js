import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    return (
      <div className="pokemonContainer">
        <div className="pokemonWrapper">
        <ul>
          <div className="infos">
            <li><strong>Nome:</strong> {this.props.name}</li>
            <li><strong>Tipo:</strong> {this.props.type}</li>
            <li>
              <strong>Peso médio:</strong> {this.props.averageWeight.value}{" "}
              {this.props.averageWeight.measurementUnit}
            </li>
          </div>
        </ul>
        <div className="imageWrapper">
          <img src={this.props.image} alt={this.props.name}></img>
        </div>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired
}

export default Pokemon;
