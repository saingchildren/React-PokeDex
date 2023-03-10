import { Flex, Show, useDisclosure } from "@chakra-ui/react";
import Navbar from "./components/Navbar/";
import ShowPokemon from "./components/ShowPokemon/";
import SliderBar from "./components/SliderBar";
import SliderContexts from "./contexts/SliderContexts";
import ModalContexts from "./contexts/ModalContexts";
import ShowPokemonContexts from "./contexts/ShowPokemonContexts";
import { useState } from "react";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [ModalPokeData, setModalPokeData] = useState({});
  const [searchName, setSearchName] = useState("");
  const {
    isOpen: SliderIsOpen,
    onOpen: SliderOnOpen,
    onClose: SliderOnClose,
  } = useDisclosure();

  const {
    isOpen: ModalIsOpen,
    onOpen: ModalOnOpen,
    onClose: ModalOnClose,
  } = useDisclosure();

  return (
    <ShowPokemonContexts.Provider
      value={{
        pokemonList: pokemonList,
        setPokemonList: setPokemonList,
      }}
    >
      <SliderContexts.Provider
        value={{
          SliderIsOpen: SliderIsOpen,
          SliderOnOpen: SliderOnOpen,
          SliderOnClose: SliderOnClose,
          searchName: searchName,
          setSearchName: setSearchName,
        }}
      >
        <ModalContexts.Provider
          value={{
            ModalIsOpen: ModalIsOpen,
            ModalOnOpen: ModalOnOpen,
            ModalOnClose: ModalOnClose,
            ModalPokeData: ModalPokeData,
            setModalPokeData: setModalPokeData,
          }}
        >
          <Navbar />
          <Flex>
            <SliderBar />
            <ShowPokemon />
          </Flex>
        </ModalContexts.Provider>
      </SliderContexts.Provider>
    </ShowPokemonContexts.Provider>
  );
};

export default App;
