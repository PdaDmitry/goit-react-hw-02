import css from './Feedback.module.css';

export default function Feedback({ feedback: { good, neutral, bad }, total }) {
  return total ? (
    <ul className={css.contList}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {total && Math.round((good / total) * 100)}%</li>
    </ul>
  ) : (
    <p>No feedback yet</p>
  );
}
