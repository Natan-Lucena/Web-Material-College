import React from "react";

const World = ({ children }) => {
  return (
    <div>
      <h1>World</h1>
      {React.Children.map(children, (chield) => {
        chield = React.cloneElement(chield);
        return React.cloneElement(chield);
      })}
    </div>
  );
};

export default World;
