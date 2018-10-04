import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';


export const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return action.payload.items;
    default:
      return state;
  }
};
