import { useEffect, useState } from 'react';
import PetsCard from './PetsCard';
import css from './Pets.module.css';
import { getFetch } from '../../Helper/fetch';

function PetsCardList() {
  const [petsArr, setPetsArr] = useState([]);

  useEffect(() => {
    getFetch('pets', setPetsArr);
  }, []);

  return (
    <div className={css.container}>
      {petsArr.map((obj) => (
        <PetsCard key={obj.id} {...obj} />
      ))}
    </div>
  );
}

export default PetsCardList;
