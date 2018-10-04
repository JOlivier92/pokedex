import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { receiveAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';
import { HashRouter, Route } from 'react-router-dom';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  window.receiveAllPokemon = receiveAllPokemon;
  ReactDOM.render(<Root store={store}/>, root);
});
