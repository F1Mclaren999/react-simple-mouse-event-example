import React, { useState, useEffect, useRef } from 'react';
import './style.css';

export default function App() {
  const [upperCase, setIsShown] = useState(false);
  const [val, setVal] = useState('');

  const handleMouseEnter = () => {
    console.log('i am entering!');
  };

  const handleMouseLeave = () => {
    console.log('i am achieving!');
    setIsShown(false);
    fetch('https://dummy.restapiexample.com/api/v1/employee/1').then(
      async (response) => {
        const resp = await response.json();
        console.log('response from api...', resp.data);
        setVal(resp.data);
      }
    );
    console.log('api call output...', val);
  };

  return (
    <div>
      <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => handleMouseLeave(false)}
      >
        {upperCase ? `Hello StackBlitz!` : 'Ping'}
      </button>
      {val !== '' ? <p>{val.employee_name}</p> : <p>no data</p>}
    </div>
  );
}
