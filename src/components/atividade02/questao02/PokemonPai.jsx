import PokemonContext from "./PokemonContext";
import PokemonNeto from "./PokemonNeto";

const PokemonPai = () => {
  return (
    <div>
      <PokemonContext.Consumer>
        {(value) => {
          return (
            <div>
              <img
                src={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" +
                  (value + 1) +
                  ".png"
                }
                alt="Pokemon"
              ></img>
              <PokemonNeto />
            </div>
          );
        }}
      </PokemonContext.Consumer>
    </div>
  );
};
export default PokemonPai;
