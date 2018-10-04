import { requestAllPokemon, requestSinglePokemon } from '../middleware/thunk';

export const selectAllPokemon = (state) => {
  let output = [];

  Object.keys(state.entities.pokemon).forEach(key => {
    output.push(state.entities.pokemon[key]);
  });
  return output;
};

export const selectSinglePokemon = (state) => {
  return [state.entities.pokemon];
};
