import {React, useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";


import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([{name: 'John Doe', phone: '800-555-5555', email: 'johndoe12345@aol.com'}
        ]);
  const [appointments, setAppointments] = useState([
    {currentTitle: 'Some Task',
    data: '2050-01-01',
    timeEnteredIntoForm: '00:21',
    contact: 'Some Person',
    }]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const newContact = (obj) => {
    setContacts([...contacts, obj])
  }
  const newAppointment = (obj) => {
    setAppointments([...appointments, obj])
  }


  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage newContact={newContact} contacts={contacts} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage newAppointment={newAppointment} appointments={appointments} contacts={contacts}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
