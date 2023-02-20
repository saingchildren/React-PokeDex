import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = ({ offset }) => {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [pokes, setpokes] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setloading(true);
    seterror(false);
    axios({
      method: "get",
      url: "https://pokeapi.co/api/v2/pokemon/",
      params: { offset: offset },
    }).then((res) => {
      console.log(res.data.results);
      setpokes((prev) => {
        return [...prev, ...res.data.results.map((p) => [p.name, p.url])];
      });

      setHasMore(res.data.results.length > 0);
      setloading(false);
    });
  }, [offset]);

  return { loading, error, pokes, hasMore };
};

export default useFetch;
