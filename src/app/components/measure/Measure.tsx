import React from 'react';
import './Measure.css';

const Measure = ({ measureLength }: { measureLength: number }) => {
  return (
    <div className='Measure'>
      {[...Array(measureLength)].map((a, ind) => (
        <div key={ind}>{measureLength}</div>
      ))}
    </div>
  );
};

export default Measure;
