const Hero = ({ name, img }) => {
  return (
    <div>
      <h2>Nome: {name}</h2>
      <img alt="" src={img} />
    </div>
  );
};
const Enemy = ({ name, img }) => {
  return (
    <div>
      <h2>Nome: {name}</h2>
      <img alt="" src={img} />
    </div>
  );
};
export { Hero, Enemy };
