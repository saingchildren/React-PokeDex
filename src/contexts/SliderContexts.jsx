import { createContext } from "use-context-selector";

const SliderContext = {
  SliderIsOpen: false,
  SliderOnClose: () => {},
  SliderOnOpen: () => {},
  searchName: "",
  setSearchName: () => {},
};

export default createContext(SliderContext);
