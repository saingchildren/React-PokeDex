import axios from "axios";

const getDetail = async (pokemon) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  let data;
  let name;
  let count = 0;

  try {
    await axios.get(url).then((res) => {
      data = res.data;
    });
    await axios.get(data.species.url).then((res) => {
      name = res.data.names[3].name;
    });

    data.abilities.map(async (a) => {
      await axios.get(a.ability.url).then((res) => {
        data.abilities[count].ability = {
          ...data.abilities[count].ability,
          name: res.data.names[2].name,
        };
      });
      count = count + 1;
    });
  } catch (e) {
    return e;
  }

  return { data, name };
};

export default getDetail;
