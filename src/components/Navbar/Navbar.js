import { Box, Flex, Container } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Heading = styled.h1`
  font-size: 2.5em;
  color: red;
  font-weight: bold;
  font-style: italic;
`;

const Navbar = () => {
  return (
    <Box background="#2D2B37">
      <Container centerContent>
        <Heading>PokéDex</Heading>
      </Container>
    </Box>
  );
};

export default Navbar;
