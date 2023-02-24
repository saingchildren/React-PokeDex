import { TypeNameEnum } from "../../enum/TypeNameEnum";
import { ShowStyle } from "./style";

const { Text, useColorModeValue } = require("@chakra-ui/react");

const ShowType = ({ type }) => {
  const typeName = TypeNameEnum[type.name];

  return (
    <Text
      color="#E8EBF7"
      style={ShowStyle(typeName)}
    >
      {typeName}
    </Text>
  );
};

export default ShowType;
