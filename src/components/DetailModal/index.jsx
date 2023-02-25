import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import { useContextSelector } from "use-context-selector";
import ModalContexts from "../../contexts/ModalContexts";

const DetailModal = () => {
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
  console.log(ModalPokeData);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{name}</ModalHeader>
        <ModalBody>This is Body</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DetailModal;
