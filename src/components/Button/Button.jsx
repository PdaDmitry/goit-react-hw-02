import css from './Button.module.css';

export default function Button({ evtHandlerFunc, children }) {
  return (
    <button className={css.btn} onClick={evtHandlerFunc}>
      {children}
    </button>
  );
}
