import {
  Box,
  Container,
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";
import ShowType from "./ShowType";

const BoxStyle = {
  maxWidth: "150px",
};

const PokemonCard = ({ src, name, types }) => {
  return (
    <Box style={BoxStyle}>
      <Card alignItems="center">
        <CardBody>
          <Image src={src} width="100px" />
          <Text textAlign="center" mt={4}>
            {name}
          </Text>
          <Flex gap={2} mt={2.5} justifyContent="center" wrap="wrap">
            {types.map((t) => (
              <ShowType type={t} />
            ))}
          </Flex>
        </CardBody>
      </Card>
    </Box>
  );
};

export default PokemonCard;
