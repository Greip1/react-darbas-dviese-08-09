import { Link } from 'react-router-dom';
import PetsCardList from '../components/Pets/PetsCardList';
import Button from '../UI/Button';
import Search from '../UI/Search';

function PetsPage() {
  return (
    <div>
      <div className="pets-title-container">
        <h1 className="pets-title">Pets List</h1>

        <Link to={'add'}>
          <Button>ADD PET</Button>
        </Link>
      </div>

      <Search title={'Iveskite gyvuno varda '} />
      <br />
      <PetsCardList />
    </div>
  );
}

export default PetsPage;
