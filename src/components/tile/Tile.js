import React from "react";

export const Tile = (props) => {
  const { obj } = props;
  const objValues = Object.values(obj);
  


  return (
    <div className="tile-container">
      {objValues.map((item, i) => {
        return(
          <p key={i} className={ i === 0 ? 'tile-title' : 'tile' } >{item}</p>
        )
      })}
    </div>
  );
};
