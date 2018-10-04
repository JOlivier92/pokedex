import React from 'react';
export const fetchAllPokemon = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pokemon",
  });
};

export const fetchSinglePokemon = (pokemon) => {
  return $.ajax({
    method: "GET",
    url: `/api/pokemon/${pokemon.id}`,
  });
};
