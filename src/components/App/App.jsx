import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import obj from '../../obj.json';
import { useState, useEffect } from 'react';
import css from './App.module.css';

export default function App() {
  const key = 'saved-clicks';
  const [state, setState] = useState(() => {
    const savedObject = window.localStorage.getItem(key);
    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }
    return obj;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  let totalFeedback = state.good + state.neutral + state.bad;

  function onClickReset() {
    setState(obj);
  }

  function updateFeedback(feedbackType) {
    return () => {
      setState({
        ...state,
        [feedbackType]: state[feedbackType] + 1,
      });
    };
  }

  return (
    <div className={css.container}>
      <Description />
      <Options
        Good={updateFeedback('good')}
        Neutral={updateFeedback('neutral')}
        Bad={updateFeedback('bad')}
        Reset={onClickReset}
        Total={totalFeedback}
      />
      <Feedback good={state.good} neutral={state.neutral} bad={state.bad} total={totalFeedback} />
    </div>
  );
}
