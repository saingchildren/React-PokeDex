import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState(null);
  const [showData, setshowData] = useState([]);
  let timer;

  const api = `https://pokeapi.co/api/v2/pokemon/?limit=10000`;
  const fetchPoke = async () => {
    const res = await axios.get(api);
    setPokemons(res.data.results);
  };

  useEffect(() => {
    fetchPoke();
  }, []);

  useEffect(() => {
    if (search) {
      timer = setTimeout(() => {
        setshowData(
          pokemons.filter((pokemon) => pokemon.name.includes(search))
        );
        console.log("this is timer");
      }, 700);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleSearch} />
      {showData &&
        showData.map((pokemon) => (
          <li style={{ listStyle: "number" }}>{pokemon.name}</li>
        ))}
    </div>
  );
};

export default App;
