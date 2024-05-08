export default function Feedback({ good, neutral, bad, total }) {
  // let totalFeedback = good + neutral + bad;

  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {total && Math.round((good / total) * 100)} %</li>
    </ul>
  );
}
