import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Flex,
  Image,
  Heading,
  Progress,
  Box,
  Text,
  Divider,
} from "@chakra-ui/react";
import { useContextSelector } from "use-context-selector";
import ModalContexts from "../../contexts/ModalContexts";

const DetailModal = () => {
  const statsEnum = ["HP", "攻擊", "防禦", "特攻", "特防", "速度"];
  const ModalPokeData = useContextSelector(
    ModalContexts,
    (item) => item.ModalPokeData
  );
  const isOpen = useContextSelector(ModalContexts, (item) => item.ModalIsOpen);
  const onClose = useContextSelector(
    ModalContexts,
    (item) => item.ModalOnClose
  );

  const { name, src, abilities, height, weight, stats, types } = ModalPokeData;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">
          <Heading>{name}</Heading>
        </ModalHeader>
        <Divider />
        <ModalBody>
          <Flex direction="row" align="center">
            <Image src={src} ml={5} w="40%" h="200px" />
            <Flex ml={20} direction="column">
              {stats &&
                stats.map((s, index) => {
                  return (
                    <Box>
                      <Text>{`${statsEnum[index]} : ${s.base_stat}`}</Text>
                    </Box>
                  );
                })}
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DetailModal;
