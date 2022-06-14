import { Link } from 'react-router-dom';
import PetsCardList from '../components/Pets/PetsCardList';
import Button from '../UI/Button';

function PetsPage() {
  return (
    <div>
      <div className='pets-title-container'>
        <h1 className='pets-title'>Pets List</h1>
        <Link to={'add'}>
          <Button>ADD PET</Button>
        </Link>
      </div>
      <PetsCardList />
    </div>
  );
}

export default PetsPage;
