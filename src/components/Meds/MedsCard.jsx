import Button from '../../UI/Button';
import css from '../Pets/Pets.module.css';
import css2 from '../Logs/Logs.module.css';

function MedsCard({ name, description }) {
  return (
    <div className={css.card}>
      <h3 className={css.name}>{name}</h3>
      <div className={css2.line}></div>

      <p className={css.description}>{description}</p>
      <div></div>
    </div>
  );
}

export default MedsCard;
