export const Filho = ({ altura, peso }) => {
  const imc = peso / (altura * altura);
  const isOverWeight = () => {
    if (imc > 25) {
      return <h3>Você está acima do peso</h3>;
    } else if (imc < 18) {
      return <h3>Você está abaixo do peso</h3>;
    } else {
      return <h3>Você está com o peso ideal</h3>;
    }
  };
  return (
    <div>
      <h1>IMC: {imc.toFixed(2)}</h1>
      {isOverWeight()}
    </div>
  );
};
