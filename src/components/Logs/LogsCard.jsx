import Button from '../../UI/Button';
import css from '../Pets/Pets.module.css';
import css2 from './Logs.module.css';

function LogsCard({ status, description }) {
  return (
    <div className={css.card}>
      <h3 className={css.name}>{status}</h3>
      <div className={css2.line}></div>
      <p className={css.description}>{description}</p>
      <div>{/* <Button>DELETE</Button> */}</div>
    </div>
  );
}

export default LogsCard;
