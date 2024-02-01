import React, { useState } from 'react';
import Calendar from 'react-calendar';

const Calender = () => {
    const [date, setDate] = useState(new Date());
    const onChange = date => {
        setDate(date);
    };
  return (
    <div className='app-calendar'>
      <Calendar onChange={onChange} value={date} />
      {console.log(date)}
      {date.toString()}
    </div>
  );
};
export default Calender;
