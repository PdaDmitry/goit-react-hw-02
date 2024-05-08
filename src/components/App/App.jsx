import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import obj from '../../obj.json';
import { useState } from 'react';

export default function App() {
  const [state, setState] = useState(obj);
  let totalFeedback = state.good + state.neutral + state.bad;

  function currentState(key) {
    return () => {
      setState({
        ...state,
        [key]: state[key] + 1,
      });
    };
  }

  const handleClickGood = currentState('good');
  const handleClickNeutrak = currentState('neutral');
  const handleClickBad = currentState('bad');

  return (
    <>
      <Description />
      <Options Good={handleClickGood} Neutral={handleClickNeutrak} Bad={handleClickBad} />
      <Feedback good={state.good} neutral={state.neutral} bad={state.bad} total={totalFeedback} />
    </>
  );
}

// const handleClickGood = () => {
//   setState({
//     ...state,
//     good: state.good + 1,
//   });
// };
