import { useEffect, useState } from "react";
import getPokemons from "./getPokemons";
import getDetail from "./getDetail";
import PokemonCard from "./Card";
import { Box, Container, Flex } from "@chakra-ui/react";

const ShowPokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    (async () => {
      setPokemonList(await getPokemons(0));
    })();
  }, []);

  return (
    <Box m="50px">
      <Flex justify="center" wrap="wrap" gap={5}>
        {pokemonList.map((p) => (
          <PokemonCard
            src={p.data.sprites.other.dream_world.front_default}
            name={p.name}
            types={p.data.types}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default ShowPokemon;
