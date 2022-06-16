import { useEffect, useState } from 'react';
import PetsCard from './PetsCard';
import css from './Pets.module.css';
import { getFetch } from '../../Helper/fetch';

function PetsCardList({ lift }) {
  const [petsArr, setPetsArr] = useState([]);

  useEffect(() => {
    getFetch('pets', setPetsArr);
  }, []);

  return (
    <div className={css.container}>
      {lift.length !== 0
        ? lift.map((obj) => <PetsCard key={obj.id} {...obj} />)
        : petsArr.map((obj) => <PetsCard key={obj.id} {...obj} />)}
      {/* {petsArr.map((obj) => (
        <PetsCard key={obj.id} {...obj} />
      ))} */}
    </div>
  );
}

export default PetsCardList;
