import PokemonContext from "./PokemonContext";
import PokemonPai from "./PokemonPai";

const PokemonAvo = () => {
  return (
    <div>
      <PokemonContext.Provider value={4}>
        <img
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" +
            4 +
            ".png"
          }
          alt="Pokemon"
        ></img>
        <PokemonPai />
      </PokemonContext.Provider>
    </div>
  );
};
export default PokemonAvo;
