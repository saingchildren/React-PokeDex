import { createContext } from "use-context-selector";

const ModalContext = {
  ModalIsOpen: false,
  ModalOnClose: () => {},
  ModalOnOpen: () => {},
  ModalPokeData: {},
  setModalPokeData: () => {}
};

export default createContext(ModalContext);
