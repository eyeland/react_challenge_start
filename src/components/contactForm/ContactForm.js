import { render } from "@testing-library/react";
import React from "react";

/*
export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    ContactForm
  );
};
*/

export const ContactForm = (props) => {

   const setContactInfo = props.setContactInfo
   const contactInfo = props.contactInfo

   const handleChange = (e) => {
     setContactInfo({
       ...contactInfo,
       [e.target.name] : e.target.value.trim()
     })
   }

  return(
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type='text' placeholder='name' 
          name='name'
          value={props.contactInfo.name}
          onChange={handleChange}
          />

        <input type='tel'  placeholder='phone number Ex. 800-555-5556' 
          name='phone'
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" 
          value={props.contactInfo.phone}
          onChange={handleChange}
          />

        <input type='email' placeholder='email'
          name='email'
          value={props.contactInfo.email}
          onChange={handleChange}
        />

        <input type='submit'/>
      </form>

    </div>
  )
}
