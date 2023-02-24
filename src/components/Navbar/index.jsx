import {
  Heading,
  Box,
  Flex,
  Spacer,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import ToggleColorMode from "../ToggleColorMode";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Flex
      position="fixed"
      w="100%"
      align="center"
      zIndex={1}
      bg={useColorModeValue("#125E8A", "#2D2B37")}
      boxShadow="dark-lg"
      p={2}
    >
      <IconButton
        icon={<HamburgerIcon />}
        display="flex"
        colorScheme={useColorModeValue("#125E8A", "#2D2B37")}
        color={useColorModeValue("#000000", "#FFFFFF")}
        size="lg"
      />
      <Spacer />
      <Box>
        <Heading
          size="2xl"
          fontStyle="italic"
          color={useColorModeValue("#3399BB", "red")}
        >
          PokéDex
        </Heading>
      </Box>
      <Spacer />
      <ToggleColorMode />
    </Flex>
  );
};

export default Navbar;
