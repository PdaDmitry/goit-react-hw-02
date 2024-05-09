import Button from '../Button/Button';
import css from './Options.module.css';

export default function Options({ Good, Neutral, Bad, Reset, Total }) {
  return (
    <div className={css.contButtons}>
      <Button evtHandlerFunc={Good}>Good</Button>
      <Button evtHandlerFunc={Neutral}>Neutral</Button>
      <Button evtHandlerFunc={Bad}>Bad</Button>
      {Total !== 0 && <Button evtHandlerFunc={Reset}>Reset</Button>}
    </div>
  );
}
