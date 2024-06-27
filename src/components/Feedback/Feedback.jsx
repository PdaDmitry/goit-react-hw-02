import css from './Feedback.module.css';

export default function Feedback({ feedback: { good, neutral, bad }, feedbackCount, goodPercent }) {
  return (
    <ul className={css.contList}>
      <li>
        <p>Good: {good}</p>
      </li>
      <li>
        <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>
      <li>
        <p>Total: {feedbackCount}</p>
      </li>
      <li>
        <p>Positive: {feedbackCount && goodPercent}%</p>
      </li>
    </ul>
  );
}
