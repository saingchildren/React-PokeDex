import { createContext } from "use-context-selector";

const ModalContext = {
  ModalIsOpen: false,
  ModalOnClose: () => {},
  ModalOnOpen: () => {},
};

export default createContext(ModalContext);
