import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { modalTheme } from "./ModalTheme"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#ACBED8", "#202023")(props),
      fontSize: "18px",
      fontWeight: "bold",
    },
  }),
};

const components = {
  Modal: modalTheme
}

const theme = extendTheme({ config, styles, components });

export default theme;
