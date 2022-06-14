import Button from '../../UI/Button';
import css from './Pets.module.css';

function PetsCard() {
  return (
    <div className={css.card}>
      <h3 className={css.name}>Name</h3>
      <p className={css.date}>Data</p>
      <p className={css.email}>Email</p>
      <div>
        <Button>VIEW LOG</Button>
        <Button clas={'reverse'}>DELETE</Button>
      </div>
    </div>
  );
}

export default PetsCard;
