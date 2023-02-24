import { Flex, useDisclosure } from "@chakra-ui/react";
import Navbar from "./components/Navbar/";
import ShowPokemon from "./components/ShowPokemon/";
import SliderBar from "./components/SliderBar";
import SliderContexts from "./contexts/SliderContexts";
import ModalContexts from "./contexts/ModalContexts";
import DetailModal from "./components/DetailModal";

const App = () => {
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
    <SliderContexts.Provider
      value={{
        SliderIsOpen: SliderIsOpen,
        SliderOnOpen: SliderOnOpen,
        SliderOnClose: SliderOnClose,
      }}
    >
      <ModalContexts.Provider
        value={{
          ModalIsOpen: ModalIsOpen,
          ModalOnOpen: ModalOnOpen,
          ModalOnClose: ModalOnClose,
        }}
      >
        <Navbar />
        <Flex>
          <DetailModal />
          <SliderBar />
          <ShowPokemon />
        </Flex>
      </ModalContexts.Provider>
    </SliderContexts.Provider>
  );
};

export default App;
