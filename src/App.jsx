import { Flex, useDisclosure } from "@chakra-ui/react";
import Navbar from "./components/Navbar/";
import ShowPokemon from "./components/ShowPokemon/";
import SliderBar from "./components/SliderBar";

const App = () => {
  return (
    <>
      <Navbar />
      <Flex>
        <SliderBar />
        <ShowPokemon />
      </Flex>
    </>
  );
};

export default App;
