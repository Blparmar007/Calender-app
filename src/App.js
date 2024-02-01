import React from 'react';
import './App.css';
// import 'react-calendar/dist/Calendar.css';
import Header from './componets/Header';
import Calender from './componets/Calender';

const App = () => {
  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>
        <div>
          <Calender />
        </div>
      </div>
    </div>
  );
};

export default App;
