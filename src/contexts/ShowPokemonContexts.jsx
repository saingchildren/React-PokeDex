import { createContext } from "use-context-selector";

const ShowPokemonContexts = {
  pokemonList: [],
  setPokemonList: () => {},
};

export default createContext(ShowPokemonContexts);
