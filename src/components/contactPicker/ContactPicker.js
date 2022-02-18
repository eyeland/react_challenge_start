import React from "react";

export const ContactPicker = (props) => {
  const { contacts, onChange } = props;
  return (
   <div>  
     <select onChange={onChange} >
      {contacts.map((item) => {
        return(
          
            <option key={item.name} value={item.name}>{item.name}</option>
          
        )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
      })}
     </select>
   </div>
  );
};
