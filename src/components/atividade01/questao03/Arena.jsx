import { Enemy, Hero } from "./Batalha";

const Arena = () => {
  return (
    <div>
      <Hero
        name="Hero"
        img="https://livecoins.com.br/wp-content/uploads/2018/04/satoshi.jpg"
      />
      <Enemy
        name="Enemy"
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Foto_oficial_de_Luiz_Inácio_Lula_da_Silva_%28ombros%29.jpg/1200px-Foto_oficial_de_Luiz_Inácio_Lula_da_Silva_%28ombros%29.jpg"
      />
    </div>
  );
};
export { Arena };
