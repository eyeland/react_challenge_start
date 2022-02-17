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
      currentTitle: currentTitle,
      contact: contact,
      data: data,
      timeEnteredIntoForm: timeEnteredIntoForm
    })
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
         <TileList appointments={appointments}/> 
      </section>
    </div>
  );
};
