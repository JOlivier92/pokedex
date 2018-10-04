import { connect } from 'react-redux';
import PokemonIndex from './pokemon_index';

// Actions
import { requestAllPokemon } from '../../middleware/thunk';
// import { receiveAllPokemon } from '../../actions/pokemon_actions';
import { selectAllPokemon } from '../../reducers/selectors';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: (() => dispatch(requestAllPokemon()))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
