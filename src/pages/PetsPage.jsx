import { useState } from 'react';
import { Link } from 'react-router-dom';
import PetsCardList from '../components/Pets/PetsCardList';
import Button from '../UI/Button';
import Search from '../UI/Search';

function PetsPage() {
  const [liftFiltrArr, setLiftFiltrArr] = useState('');

  function searchLift(arr) {
    console.log('Pet page pakelta', arr);
    setLiftFiltrArr(arr);
  }

  return (
    <div>
      <div className="pets-title-container">
        <h1 className="pets-title">Pets List</h1>

        <Link to={'add'}>
          <Button>ADD PET</Button>
        </Link>
      </div>

      <Search title={'Iveskite gyvuno varda '} lift={searchLift} />
      <br />
      <PetsCardList lift={liftFiltrArr} />
    </div>
  );
}

export default PetsPage;
