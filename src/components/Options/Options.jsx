import Button from '../Button/Button';
import css from './Options.module.css';

export default function Options({ goodReview, neutralReview, badReview, reset, feedbackCount }) {
  return (
    <div className={css.contButtons}>
      <Button evtHandlerFunc={goodReview}>Good</Button>
      <Button evtHandlerFunc={neutralReview}>Neutral</Button>
      <Button evtHandlerFunc={badReview}>Bad</Button>
      {feedbackCount !== 0 && <Button evtHandlerFunc={reset}>Reset</Button>}
    </div>
  );
}
