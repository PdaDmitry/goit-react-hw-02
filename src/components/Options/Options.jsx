// import { useState } from 'react';
import Button from '../Button/Button';

export default function Options({ Good, Neutral, Bad }) {
  return (
    <div>
      <Button evtHandlerFunc={Good}>Good</Button>
      <Button evtHandlerFunc={Neutral}>Neutral</Button>
      <Button evtHandlerFunc={Bad}>Bad</Button>
      {/* <Button evtHandlerFunc={handleToggle}>Reset</Button> */}
    </div>
  );
}

// const [clickGood, setClickGood] = useState(0);
// const [clickNeutrak, setclickNeutrak] = useState(0);
// const [clickBad, setclickBad] = useState(0);

// function currentState(setFunc) {
//   return () => setFunc(clickBtn => clickBtn + 1);
// }

// const handleClickGood = currentState(setClickGood);
// const handleClickNeutrak = currentState(setclickNeutrak);
// const handleClickBad = currentState(setclickBad);
