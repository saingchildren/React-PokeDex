import { TypeColorEnum } from "../../enum/TypeColorEnum";
export const ShowStyle = (typeName) => {
  return {
    backgroundColor: TypeColorEnum[typeName],
    textAlign: "center",
    width: "45px",
    borderRadius: "0 10px 0 10px",
  };
};
