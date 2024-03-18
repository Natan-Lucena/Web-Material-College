//import { Pai } from "./components/atividade01/questao01/Pai";
//import * as meuPc from "./components/atividade01/questao02/MeuPc.jsx";
import { Arena } from "./components/atividade01/questao03/Arena.jsx";
import World from "./components/atividade01/questao03/World.jsx";
function App() {
  /*  
RETORNO DA QUESTAO 1
return (
    <div className="App">
      <Pai />
    </div>
  );*/
  //RETORNO DA QUESTAO 2
  // return (
  //   <div>
  //     <meuPc.memoriaRam precoMemoriaRam={15} nomeMemoriaRam="Ryzen" />
  //     <meuPc.placaDeVideo precoPlacadeVideo={20} nomePlacaDeVideo="Nvidia" />
  //     <meuPc.placaMae precoPlacaMae={30} nomePlacaMae="Asus" />
  //   </div>
  // );
  return (
    <div>
      <World>
        <Arena></Arena>
        <Arena></Arena>

        <Arena></Arena>
      </World>
    </div>
  );
}

export default App;
