import PokemonContext from "./PokemonContext";

const PokemonNeto = () => {
  return (
    <div>
      <PokemonContext.Consumer>
        {(value) => {
          return (
            <div>
              <img
                src={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" +
                  (value + 2) +
                  ".png"
                }
                alt="Pokemon"
              ></img>
            </div>
          );
        }}
      </PokemonContext.Consumer>
    </div>
  );
};
export default PokemonNeto;
