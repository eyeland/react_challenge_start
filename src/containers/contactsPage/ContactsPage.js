
import { React, useEffect, useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";


export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [contactInfo, setContactInfo] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [duplicateName, setDuplicateName] = useState(false);

  const {newContact, contacts} = props;
  

  useEffect(() => {
   if(contacts.find(item => item.name === contactInfo.name)) { setDuplicateName(true) }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (duplicateName === false) {
    newContact(e.target.value)
    setContactInfo({name:'', phone:'', email:''})
   }

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          contactInfo={contactInfo}
          duplicateName={duplicateName}
          setContactInfo={setContactInfo}
          setDuplicateName={setDuplicateName}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts}/>
      </section>
    </div>
  );
};
