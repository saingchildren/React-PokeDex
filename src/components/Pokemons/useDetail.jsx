import { useEffect, useState } from "react";
import axios from "axios";

const useDetail = ({ url }) => {
  const [typeName, setTypeName] = useState([]);
  const [pokeName, setPokeName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [url]);

  return null;
};

export default useDetail;
