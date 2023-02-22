import { useEffect, useState, useRef, useCallback } from "react";
import getPokemons from "../../fetchAPI/getPokemons";
import PokemonCard from "../PokemonCard";
import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ShowPokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const observer = useRef();

  const lastPokemon = useCallback(
    (node) => {
      setTimeout(() => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            setOffset((prev) => prev + 18);
          }
        });

        if (node) observer.current.observe(node);
      }, 1500);
    },
    [offset]
  );

  useEffect(() => {
    (async () => {
      const temp = await getPokemons(offset);
      console.log(pokemonList.length);
      setPokemonList((prev) => [...prev, ...temp]);
    })();
  }, [offset]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ y: -20, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1.5 }}
    >
      <Box m="45px" mx={0}>
        <Flex justify="center" wrap="wrap" gap={10}>
          {pokemonList.map((p, index) => {
            if (pokemonList.length === index + 1) {
              return (
                <PokemonCard
                  key={p.name}
                  ref={lastPokemon}
                  src={p.data.sprites.other.dream_world.front_default}
                  name={p.name}
                  types={p.data.types}
                />
              );
            } else {
              return (
                <PokemonCard
                  src={p.data.sprites.other.dream_world.front_default}
                  name={p.name}
                  types={p.data.types}
                />
              );
            }
          })}
        </Flex>
      </Box>
    </motion.div>
  );
};

export default ShowPokemon;
