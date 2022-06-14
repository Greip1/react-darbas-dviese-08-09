import { Link } from 'react-router-dom';
import MedsCardList from '../components/Meds/MedsCardList';
import Button from '../UI/Button';

function MedicationPage() {
  return (
    <div>
      <div className="pets-title-container">
        <h1 className="pets-title">Medications List</h1>
        <Link to={'addMeds'}>
          <Button>ADD NEW MEDICATION</Button>
        </Link>
      </div>
      <MedsCardList />
    </div>
  );
}

export default MedicationPage;
