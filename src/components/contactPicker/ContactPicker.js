import React from "react";

export const ContactPicker = (props) => {
  const { contacts, onChange } = props;
  return (
   <div>  
     <select onChange={onChange} >
       <option value="nocontact" key='nocontact' selected>No Contact</option>
      {contacts.map((item) => {
        return(
          
            <option key={item.name} value={item.name}>{item.name}</option>
          
        )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
      })}
     </select>
   </div>
  );
};
