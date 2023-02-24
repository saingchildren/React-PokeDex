import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Button,
} from "@chakra-ui/react";
import SliderContexts from "../../contexts/SliderContexts";
import { useContextSelector } from "use-context-selector";
const SliderBar = () => {
  const isOpen = useContextSelector(SliderContexts, (item) => item.SliderIsOpen);
  const onClose = useContextSelector(SliderContexts, (item) => item.SliderOnClose);

  return (
    <Drawer size="md" isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>This is Test Drawer.</DrawerHeader>
        <DrawerBody>FUCK</DrawerBody>
        <Button onClick={onClose}>X</Button>
      </DrawerContent>
    </Drawer>
  );
};

export default SliderBar;
