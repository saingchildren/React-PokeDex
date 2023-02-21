const TypeNameEnum = (type) => {
  const NameEnum = Object.freeze({
    normal: "一般",
    fire: "火",
    water: "水",
    grass: "草",
    bug: "蟲",
    electric: "電",
    flying: "飛行",
    ground: "地面",
    rock: "岩石",
    poison: "毒",
    steel: "鋼",
    dragon: "龍",
    ice: "冰",
    fairy: "妖精",
    fighting: "格鬥",
    dark: "惡",
    psychic: "超能",
    ghost: "幽靈",
  });

  return NameEnum[type];
};

export default TypeNameEnum;
