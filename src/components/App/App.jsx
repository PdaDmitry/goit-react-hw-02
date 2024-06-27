import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import obj from '../../obj.json';
import { useState, useEffect } from 'react';
import css from './App.module.css';
import Notification from '../Notification/Notification';

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
  let percentagePositive = Math.round((state.good / totalFeedback) * 100);

  function onReset() {
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
        goodReview={updateFeedback('good')}
        neutralReview={updateFeedback('neutral')}
        badReview={updateFeedback('bad')}
        reset={onReset}
        feedbackCount={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback feedback={state} feedbackCount={totalFeedback} goodPercent={percentagePositive} />
      ) : (
        <Notification />
      )}
    </div>
  );
}
