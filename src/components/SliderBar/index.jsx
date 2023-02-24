import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
const SliderBar = () => {
  return (
    <Drawer isOpen={false} placement="left">
      <DrawerContent>
        <DrawerHeader>This is Test Drawer.</DrawerHeader>
        <DrawerBody>FUCK</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SliderBar;
