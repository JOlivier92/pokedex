
import { requestAllPokemon } from '../middleware/thunk';

export const selectAllPokemon = (state) => {
  let output = [];

  Object.keys(state.entities.pokemon).forEach(key => {
    output.push(state.entities.pokemon[key]);
  });
  return output;
};
