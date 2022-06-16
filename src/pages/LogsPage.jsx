import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import LogsCardList from '../components/Logs/LogsCardList';
import Button from '../UI/Button';

// function useQuery() {
//   const { search } = useLocation();

//   return React.useMemo(() => new URLSearchParams(search), [search]);
// }

export const LogsPage = () => {
  //   let query = useQuery();
  //   const vardas = query.get('petName');
  //   console.log(vardas);
  const { petId } = useParams();
  const { search } = useLocation();
  console.log(petId);
  const petName = search.split('=')[1];
  console.log(petName);

  function getName(name) {
    console.log('Gaunasm Name', name);
  }
  return (
    <div>
      <div className="pets-title-container">
        <h1 className="pets-title">{petName}: Health Records</h1>
        <div>
          <Link to={`/addPrescriptions/${petId}`}>
            <Button>ADD PRESCRIPTION</Button>
          </Link>
          <Link to={`/addLog/${petId}`}>
            <Button clas={'reverse'}>ADD LOG</Button>
          </Link>
        </div>
      </div>
      <div className="filter">
        <Button>
          LOGS <i className="fa fa-check" aria-hidden="true"></i>
        </Button>
        <Button>
          Prescription<i className="fa fa-check" aria-hidden="true"></i>
        </Button>
      </div>
      <div>
        <LogsCardList getName={getName} />
      </div>
      {/* <PetsCardList /> */}
    </div>
  );
};
