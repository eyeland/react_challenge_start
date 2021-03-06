import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = (props) => {

  const {newAppointment, contacts, appointments, setCurrentTitle, 
          currentTitle, setContact, contact, setData, data, 
          setTimeEnteredIntoForm, timeEnteredIntoForm, handleSubmit
        } = props;

        const getTodayString = () => {
         const [month, day, year] = new Date()
          .toLocaleDateString("en-US")
          .split("/");
           return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
        }
        
 

  return(
    <div>
      <form
        onSubmit={handleSubmit}
      >
        <input type='text'  value={currentTitle.currentTitle}
          placeholder='title' onChange={(e) => {setCurrentTitle({
            ...currentTitle,
            [e.target.name] : e.target.value.trim()
          })}}
          />

        <input type='date'  value={data.data} min={getTodayString()}
          onChange={(e) => {setData({
            [e.target.name] : e.target.value
          })}}
        />
        <input type='time'  value={timeEnteredIntoForm.timeEnteredIntoForm}
          onChange={(e) => {setTimeEnteredIntoForm({
            ...timeEnteredIntoForm,
            [e.target.name] : e.target.value
          })}}
        />
        <input type='submit'/>

        <ContactPicker contacts={contacts} value={contact.name} 
          onChange={(e) => {setContact({
            name : e.target.value
          })}}
        />
      </form>
    </div>
  )
}


























// export const AppointmentForm = ({
//   contacts,
//   title,
//   setTitle,
//   contact,
//   setContact,
//   date,
//   setDate,
//   time,
//   setTime,
//   handleSubmit
// }) => {
//   const getTodayString = () => {
//     const [month, day, year] = new Date()
//       .toLocaleDateString("en-US")
//       .split("/");
//     return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
//   };

//   return (
//     AppointmentForm
//   );
// };
