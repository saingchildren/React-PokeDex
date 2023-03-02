import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import SliderContexts from "../../contexts/SliderContexts";
import { useContextSelector } from "use-context-selector";
const SliderBar = () => {
  const searchName = useContextSelector(
    SliderContexts,
    (item) => item.searchName
  );
  const setSearchName = useContextSelector(
    SliderContexts,
    (item) => item.setSearchName
  );

  const isOpen = useContextSelector(
    SliderContexts,
    (item) => item.SliderIsOpen
  );
  const onClose = useContextSelector(
    SliderContexts,
    (item) => item.SliderOnClose
  );

  const handleSearchName = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <Drawer size="md" isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader textAlign="center">
          <Heading>搜尋</Heading>
        </DrawerHeader>
        <DrawerBody>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="search" onChange={handleSearchName} />
          </FormControl>
        </DrawerBody>
        <Button onClick={onClose}>X</Button>
      </DrawerContent>
    </Drawer>
  );
};

export default SliderBar;
