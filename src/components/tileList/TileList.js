import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
    const { contacts, appointments } = props;
  return (
    <div>
      { contacts ? contacts.map((obj, i) => {
        return(
          <Tile obj={obj} key={i}/>
        )
      }) : appointments.map((obj, i) => {
        return(
          <Tile obj={obj} key={i}/>
        )
      }) 
      
      }
    </div>
  );
};
