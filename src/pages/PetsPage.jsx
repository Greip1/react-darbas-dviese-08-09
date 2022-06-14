import PetsCardList from '../components/Pets/PetsCardList';
import Button from '../UI/Button';

function PetsPage() {
  return (
    <div>
      <div className="pets-title-container">
        <h1 className="pets-title">Pets List</h1>
        <Button>ADD PET</Button>
      </div>
      <PetsCardList />
    </div>
  );
}

export default PetsPage;
