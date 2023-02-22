import axios from "axios";

const getDetail = async (pokemon) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  let data;
  let name;

  try {
    await axios.get(url).then((res) => {
      data = res.data;
    });
    await axios.get(data.species.url).then((res) => {
      name = res.data.names[3].name;
    });
  } catch (e) {
    console.log("error");
    return e;
  }

  return { data, name };
};

export default getDetail;
