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
import styled from "@emotion/styled";

const BoxStyle = {
  maxWidth: "150px",
};

const Button = styled.button`
  display: "flex";
`;

const PokemonCard = ({ src, name, types }) => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <Button onClick={handleClick}>
      <Box style={BoxStyle}>
        <Card alignItems="center">
          <CardBody>
            <Image src={src} width="100px" height="130px" />
            <Text textAlign="center" mt={4}>
              {name}
            </Text>
            <Flex gap={2} mt={2.5} justifyContent="center" wrap="wrap">
              {types.map((t) => (
                <ShowType type={t.type} />
              ))}
            </Flex>
          </CardBody>
        </Card>
      </Box>
    </Button>
  );
};

export default PokemonCard;
