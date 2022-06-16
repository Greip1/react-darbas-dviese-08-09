import { useEffect, useState } from 'react';
import MedsCard from './MedsCard';
import css from '../Pets/Pets.module.css';
import { getFetch } from '../../Helper/fetch';

function MedsCardList() {
  const [medsArr, setMedsArr] = useState([]);

  useEffect(() => {
    getFetch('meds', setMedsArr);
  }, []);

  return (
    <div className={css.container}>
      {medsArr
        .filter((ob) => ob.name)
        .map((obj) => (
          <MedsCard key={obj.id} {...obj} />
        ))}
    </div>
  );
}

export default MedsCardList;
