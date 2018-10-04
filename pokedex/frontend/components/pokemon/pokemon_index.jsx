import React from 'react';
// import props from './pokemon_index_container';
// import { requestAllPokemon } from '../../middleware/thunk';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component{
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokemon = this.props.pokemon;
    return (
      <ul>
        {pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)}
      </ul>
    );
  }

}



export default PokemonIndex;
