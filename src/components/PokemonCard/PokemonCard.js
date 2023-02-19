import {
  Box,
  Container,
  Card,
  CardBody,
  CardFooter,
  Image,
} from "@chakra-ui/react";

const BoxStyle = {
  maxWidth: "150px",
};

const PokemonCard = () => {
  return (
    <Box style={BoxStyle}>
      <Card>
        <CardBody>
          <Image src="./images/1.svg" width="100px"/>
        </CardBody>
        <CardFooter>CardFooter</CardFooter>
      </Card>
    </Box>
  );
};

export default PokemonCard;
