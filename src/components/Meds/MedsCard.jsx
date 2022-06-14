import Button from '../../UI/Button';
import css from '../Pets/Pets.module.css';

function MedsCard({ name, description }) {
  return (
    <div className={css.card}>
      <h3 className={css.name}>{name}</h3>
      <p className={css.description}>{description}</p>
      <div>
        <Button>DELETE</Button>
      </div>
    </div>
  );
}

export default MedsCard;
