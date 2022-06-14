import Button from '../../UI/Button';
import css from './Pets.module.css';

function PetsCard({ id, name, dob, client_email, archived }) {
  return (
    <div className={css.card}>
      <h3 className={css.name}>{name}</h3>
      <p className={css.date}>{dob}</p>
      <p className={css.email}>{client_email}</p>
      <div>
        <Button klase={css.btn}>VIEW LOG</Button>
        <Button clas={'reverse'}>DELETE</Button>
      </div>
    </div>
  );
}

export default PetsCard;
