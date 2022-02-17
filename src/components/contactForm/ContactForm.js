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
    const handleChangeName = e => {
      props.setContactInfo({name: e.target.value})
    }
    const handlePhoneNumber = e => {
      props.setContactInfo({phone: e.target.value})
    }
    const handleEmail = e => {
      props.setContactInfo({email: e.target.value})
    }

  return(
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type='text' placeholder='name' 
          value={props.contactInfo.name}
          onChange={handleChangeName}
          />

        <input type='tel'  placeholder='phone number' 
          //pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" fix number
          value={props.contactInfo.phone}
          onChange={handlePhoneNumber}
          />

        <input type='email' placeholder='email'
          value={props.contactInfo.email}
          onChange={handleEmail}
        />

        <button type='submit'/>
      </form>

    </div>
  )
}
