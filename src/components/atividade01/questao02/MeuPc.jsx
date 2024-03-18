const placaDeVideo = ({ precoPlacadeVideo, nomePlacaDeVideo }) => {
  return (
    <div>
      <h2>Placa de Vídeo</h2>
      <p>Nome: {nomePlacaDeVideo}</p>
      <p>Preço: R$ {precoPlacadeVideo}</p>
    </div>
  );
};
const memoriaRam = ({ precoMemoriaRam, nomeMemoriaRam }) => {
  return (
    <div>
      <h2>Memória Ram</h2>
      <p>Nome: {nomeMemoriaRam}</p>
      <p>Preço: R$ {precoMemoriaRam}</p>
    </div>
  );
};
const placaMae = ({ precoPlacaMae, nomePlacaMae }) => {
  return (
    <div>
      <h2>Placa Mãe</h2>
      <p>Nome: {nomePlacaMae}</p>
      <p>Preço: R$ {precoPlacaMae}</p>
    </div>
  );
};
export { placaDeVideo, memoriaRam, placaMae };
