//import { Pai } from "./components/atividade01/questao01/Pai";
import * as meuPc from "./components/atividade01/questao02/MeuPc.jsx";
function App() {
  /*  
RETORNO DA QUESTAO 1
return (
    <div className="App">
      <Pai />
    </div>
  );*/
  return (
    <div>
      <meuPc.memoriaRam precoMemoriaRam={15} nomeMemoriaRam="Ryzen" />
      <meuPc.placaDeVideo precoPlacadeVideo={20} nomePlacaDeVideo="Nvidia" />
      <meuPc.placaMae precoPlacaMae={30} nomePlacaMae="Asus" />
    </div>
  );
}

export default App;
