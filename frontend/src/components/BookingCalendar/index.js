import React, { useState } from 'react'
import DatePicker from "react-datepicker"

const BookingCalendar = () => {

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

  today = yyyy + '/' + mm + '/' + dd
  console.log(today)


  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
}

export default BookingCalendar;
