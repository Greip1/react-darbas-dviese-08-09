import { Link } from 'react-router-dom';
import Button from '../../UI/Button';
import css from './Pets.module.css';

function PetsCard({ id, name, dob, client_email, archived }) {
  const newdob = new Date(dob).toISOString().split('T')[0];
  function delPet(delId) {
    console.log('Trinam zveri', delId);
    delFromDb(delId);
  }
  async function delFromDb(delId) {
    const res = await fetch(
      `https://glittery-dull-snickerdoodle.glitch.me/v1/pets/${delId}`,
      {
        method: 'DELETE',
      }
    );
    const dataInJs = await res.json();
    console.log(dataInJs);
  }
  return (
    <div className={css.card}>
      <h3 className={css.name}>{name}</h3>
      <p className={css.date}>{newdob}</p>
      <p className={css.email}>{client_email}</p>
      <div>
        <Link to={`/log/${id}?petName=${name}`}>
          <Button klase={css.btn} id={id}>
            VIEW LOG
          </Button>
        </Link>

        <Button onClick={delPet} id={id} clas={'reverse'}>
          DELETE
        </Button>
      </div>
    </div>
  );
}

export default PetsCard;
