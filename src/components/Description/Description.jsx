import css from './Description.module.css';

export default function Description() {
  return (
    <div className={css.contDescription}>
      <h1 className={css.titleText}>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
    </div>
  );
}
