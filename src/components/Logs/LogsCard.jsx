import Button from '../../UI/Button';
import css from '../Pets/Pets.module.css';

function LogsCard({ status, description }) {
  return (
    <div className={css.card}>
      <h3 className={css.name}>{status}</h3>
      <p className={css.description}>{description}</p>
      <div>{/* <Button>DELETE</Button> */}</div>
    </div>
  );
}

export default LogsCard;
