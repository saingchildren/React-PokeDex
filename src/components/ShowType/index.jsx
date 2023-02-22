import { TypeNameEnum } from "../../enum/TypeNameEnum";
import { ShowStyle } from "./style";

const { Text } = require("@chakra-ui/react");

const ShowType = ({ type }) => {
  const typeName = TypeNameEnum[type.name];

  return <Text style={ShowStyle(typeName)}>{typeName}</Text>;
};

export default ShowType;
