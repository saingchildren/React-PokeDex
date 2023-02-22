import { Box, Card, CardBody, Image, Text, Flex, forwardRef } from "@chakra-ui/react";
import ShowType from "../ShowType/index";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const BoxStyle = {
  maxWidth: "150px",
  background: "#2d3748",
  borderRadius: "50%",
};

const Button = styled.button`
  display: "flex";
`;

const PokemonCard = forwardRef((props, ref) => {
  const handleClick = () => {
    console.log("click");
  };
  const { src, name, types } = props;

  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
      <Button onClick={handleClick} ref={ref}>
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
    </motion.div>
  );
});

export default PokemonCard;
