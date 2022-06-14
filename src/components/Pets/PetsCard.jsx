import Button from '../../UI/Button';
import css from './Pets.module.css';

function PetsCard({ id, name, dob, client_email, archived }) {
  function delPet(delId) {
    console.log('Trinam zveri', delId);
    delFromDb(delId);
  }
  async function delFromDb(delId) {
    const res = await fetch(`https://glittery-dull-snickerdoodle.glitch.me/v1/pets/${delId}`, {
      method: 'DELETE',
    });
    const dataInJs = await res.json();
    console.log(`https://glittery-dull-snickerdoodle.glitch.me/v1/pets/${delId}`);
    console.log(dataInJs);
  }
  return (
    <div className={css.card}>
      <h3 className={css.name}>{name}</h3>
      <p className={css.date}>{dob}</p>
      <p className={css.email}>{client_email}</p>
      <div>
        <Button klase={css.btn}>VIEW LOG</Button>
        <Button onClick={delPet} id={id} clas={'reverse'}>
          DELETE
        </Button>
      </div>
    </div>
  );
}

export default PetsCard;
