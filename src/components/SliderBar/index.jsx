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
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import SliderContexts from "../../contexts/SliderContexts";
import { useContextSelector } from "use-context-selector";
import dataName from "../../fetchAPI/finalName.json";
import { useEffect, useState } from "react";
import getDetail from "../../fetchAPI/getDetail";
import ModalContexts from "../../contexts/ModalContexts";

const SliderBar = () => {
  let finalDataName = [];
  let timer;
  const [searchResult, setSearchResult] = useState([]);
  const [resultList, setReaultList] = useState([]);
  const setModalPokeData = useContextSelector(
    ModalContexts,
    (item) => item.setModalPokeData
  );
  const ModalOnOpen = useContextSelector(
    ModalContexts,
    (item) => item.ModalOnOpen
  );
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

  useEffect(() => {
    if (searchName === "") {
      setSearchResult([]);
    }
    if (searchName !== "") {
      timer = setTimeout(() => {
        for (var i in dataName) {
          finalDataName.push(dataName[i]);
        }
        setSearchResult(
          finalDataName.filter((data) => data[0].includes(searchName))
        );
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [searchName]);

  useEffect(() => {
    (async () => {
      const pokemons = searchResult.map(async (r) => {
        return await getDetail(r[1].toLowerCase());
      });
      Promise.all(pokemons).then((res) => {
        setReaultList(res);
      });
    })();
  }, [searchResult]);

  const handleModal = (e) => {
    ModalOnOpen();
    const target = resultList.filter((r) => r.name === e.target.textContent)[0];
    setModalPokeData({
      name: target.name,
      types: target.name.types,
      height: target.data.height,
      weight: target.data.weight,
      abilities: target.data.abilities,
      stats: target.data.stats,
      src: target.data.sprites.other.dream_world.front_default,
    });
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
          <Flex direction="column" gap={3} mt={3}>
            {searchResult &&
              searchResult.map((r) => {
                return (
                  <Button
                    onClick={handleModal}
                  >
                    {r[0]}
                  </Button>
                );
              })}
          </Flex>
        </DrawerBody>
        <Button onClick={onClose}>X</Button>
      </DrawerContent>
    </Drawer>
  );
};

export default SliderBar;
