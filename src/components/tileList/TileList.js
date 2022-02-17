import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
    const { contacts } = props;
  return (
    <div>
      { contacts.map((obj, i) => {
        return(
          <Tile obj={obj} key={i}/>
        )
      }) }
    </div>
  );
};
