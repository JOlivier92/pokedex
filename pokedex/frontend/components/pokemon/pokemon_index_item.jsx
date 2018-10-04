import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <section className="pokedex">
      <div>
        <li>{this.props.pokemon.name}
        <img src={this.props.pokemon.image_url} />
        <Link to={`/pokemon/${this.props.pokemon.id}`}>Test</Link>
        </li>
      </div>
    </section>
    );
  }
}

export default PokemonIndexItem;
// And inside the render:
