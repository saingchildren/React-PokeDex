import useFetch from "./useFetch";
import Card from "./Card";
import { useEffect, useState } from "react";
import useDetail from "./useDetail";

const Show = () => {
  const [offset, setOffset] = useState(0);

  const { loading, error, pokes, hasMore } = useFetch(offset);

  return <div>This is Show.</div>;
};

export default Show;
