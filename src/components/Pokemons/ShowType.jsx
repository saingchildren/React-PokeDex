import { Children } from "react";

const { Text } = require("@chakra-ui/react");

const ShowType = ({ type }) => {

  const TypeEnum = Object.freeze({
    火: "#BD1D1D",
    水: "#1E43E0",
    草: "#36E01E",
    電: "#E0BC1E",
    地面: "#E0971E",
    毒: "#7F1EE0",
    蟲: "#B0E01E",
    妖精: "#E01EE0",
    一般: "#C3C3C3",
    飛行: "#1EA3E0",
    龍: "#1E67E0",
    惡: "#1B1B1F",
    幽靈: "#1D054C",
    超能: "#AA0B56",
    格鬥: "#592306",
    岩石: "#754E3A",
    鋼: "#3B4A5B",
    冰: "#4379AE",
  });

  const ShowStyle = {
    backgroundColor: TypeEnum[type],
    textAlign: "center",
    width: "45px",
    borderRadius: "0 10px 0 10px",
  }

  return <Text style={ShowStyle}>{type}</Text>;
};

export default ShowType;
