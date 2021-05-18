import React from 'react';
import NOTES from '../../NOTES';
import PitchRow from '../pitch-row/PitchRow';


const Instrument = () => {
  return (
    <div>
      {[...Array(6)].map((a, ind) => NOTES.map((note) => <PitchRow key={`${note}${ind}`} pitch={`${note}${ind + 1}`}/>))}
    </div>
  )
}
export default Instrument;