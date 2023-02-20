import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Pokemons/Card";
import Show from "./components/Pokemons/Show";

const App = () => {
  return (
    <>
      <Navbar />
      <Card src="./images/1.svg" name="妙蛙種子" types={["草", "毒", "冰"]} />
      <Show />
    </>
  );
};

export default App;
