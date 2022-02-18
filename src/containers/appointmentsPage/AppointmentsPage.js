import {React, useState} from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const [currentTitle, setCurrentTitle] = useState('');
  const [contact, setContact] = useState('');
  const [data, setData] = useState('');
  const [timeEnteredIntoForm, setTimeEnteredIntoForm] = useState('');

  const {appointments, contacts, newAppointment} = props;



  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    newAppointment({
      currentTitle: Object.values(currentTitle).join(""),
      data: Object.values(data).join(""),
      timeEnteredIntoForm: Object.values(timeEnteredIntoForm).join(),
      contact: Object.values(contact)
    })
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm appointments={appointments}
          contacts={contacts}
          newAppointment={newAppointment}
          appointments={appointments}
          setCurrentTitle={setCurrentTitle}
          currentTitle={currentTitle}
          setContact={setContact}
          contact={contact}
          setData={setData}
          data={data}
          setTimeEnteredIntoForm={setTimeEnteredIntoForm}
          timeEnteredIntoForm={timeEnteredIntoForm}
          handleSubmit={handleSubmit}

        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
         <TileList appointments={Object.values(appointments)}/> 
      </section>
    </div>
  );
};
