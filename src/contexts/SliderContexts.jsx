import { createContext } from "use-context-selector";

const SliderContext = {
  SliderIsOpen: false,
  SliderOnClose: () => {},
  SliderOnOpen: () => {},
};

export default createContext(SliderContext);
