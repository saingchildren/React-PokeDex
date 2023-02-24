import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody } from "@chakra-ui/react";
import { useContextSelector } from "use-context-selector";
import ModalContexts from "../../contexts/ModalContexts";

const DetailModal = () => {
  const isOpen = useContextSelector(ModalContexts, (item) => item.ModalIsOpen);
  const onClose = useContextSelector(
    ModalContexts,
    (item) => item.ModalOnClose
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>This is Header</ModalHeader>
        <ModalBody>This is Body</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DetailModal;
