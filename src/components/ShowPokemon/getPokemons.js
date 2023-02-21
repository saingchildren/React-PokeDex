import axios from "axios";
import getDetail from "./getDetail";

const getPokemons = async (offset) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=18`;

  const data = await axios.get(url);
  const pokemons = data.data.results.map(
    async (pokemon) => (await getDetail(pokemon.name))
  );

  const pokemonList = Promise.all(pokemons);
  console.log(pokemonList)

  return pokemonList;
};

export default getPokemons;
