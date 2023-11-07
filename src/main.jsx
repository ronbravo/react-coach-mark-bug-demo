import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { CoachMark } from 'react-coach-mark';
import 'react-coach-mark/dist/styles/index.css';

const look = {
  border: '10px solid red',
  margin: '300px auto',
  height: '240px',
  padding: '20px',
  width: '320px',
};

const TestCoach = () => {
  const myRef = useRef(null);

  // NOTE: Un-comment the lines below to get the Coach to show up.
  // const [status, setStatus] = useState('init');
  // useEffect(() => {
  //   setTimeout(() => {
  //     setStatus('show');
  //     setTimeout(() => {
  //       setStatus('ready');
  //     });
  //   });
  // }, []);

  const coach = {
    activate: true,
    component: <div>Any Component You Want</div>,
    reference: myRef,
    tooltip: { position: 'bottom' },
  };

  return (
    <>
      <div style={look} ref={myRef}>
        <h2>Test Coach</h2>
      </div>
      <CoachMark {...coach} />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <TestCoach />
  </React.StrictMode>,
  document.getElementById('root')
);
