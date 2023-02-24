import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  Box,
} from "@chakra-ui/react";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <IconButton
        onClick={toggleColorMode}
        colorScheme={useColorModeValue("#125E8A", "#2D2B37")}
        color={useColorModeValue("#000000", "#FFFFFF")}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        size="lg"
      />
    </Box>
  );
};

export default ToggleColorMode;
