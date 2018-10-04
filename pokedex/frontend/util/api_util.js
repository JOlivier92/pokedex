import React from 'react';
const fetchAllPokemon = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pokemon",
  });
};

export default fetchAllPokemon;
