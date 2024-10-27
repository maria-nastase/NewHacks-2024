import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ScreenA1 from './ScreenA1';
import ScreenA2 from './ScreenA2';


const ScreenA = () => {
  return (
    <div>
      <h2>Client Side</h2>
      {/* <nav>
        <Link to="A1">Sub Screen A1</Link> | <Link to="A2">Sub Screen A2</Link>
      </nav>
      <Routes>
        <Route path="A1" element={<ScreenA1 />} />
        <Route path="A2" element={<ScreenA2 />} />
      </Routes> */}
      <div className='client'>
       
      </div>
    </div>
  );
};

export default ScreenA;
