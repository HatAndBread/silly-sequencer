import React from 'react';
import Measure from '../measure/Measure';
import './PitchRow.css';

const PitchRow = ({pitch}:{pitch: string}) => {
  return (<div className="PitchRow">
    {pitch}
    <Measure measureLength={4} />
  </div>)
}

export default PitchRow;