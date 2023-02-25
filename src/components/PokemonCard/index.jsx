import {
  Card,
  CardBody,
  Image,
  Text,
  Flex,
  forwardRef,
  useColorModeValue,
} from "@chakra-ui/react";
import ShowType from "../ShowType/index";
import { Button } from "./style";
import { motion } from "framer-motion";
import { useContextSelector } from "use-context-selector";
import ModalContexts from "../../contexts/ModalContexts";

const PokemonCard = forwardRef((props, ref) => {
  const setModalPokeData = useContextSelector(
    ModalContexts,
    (item) => item.setModalPokeData
  );
  const onOpen = useContextSelector(ModalContexts, (item) => item.ModalOnOpen);

  const { src, name, types, height, weight, stats, abilities } = props;

  const handleClick = () => {
    onOpen();
    setModalPokeData(props);
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
      <Button onClick={handleClick}>
        <Card bg={useColorModeValue("#E8EBF7", "#2D3748")} alignItems="center">
          <CardBody>
            <Image src={src} width="130px" height="130px" />
            <Text textAlign="center" mt={4} ref={ref}>
              {name}
            </Text>
            <Flex gap={2} mt={2.5} justifyContent="center" wrap="wrap">
              {types.map((t) => (
                <ShowType type={t.type} />
              ))}
            </Flex>
          </CardBody>
        </Card>
      </Button>
    </motion.div>
  );
});

export default PokemonCard;
