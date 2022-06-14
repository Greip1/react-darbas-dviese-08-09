import { useEffect, useState } from 'react';
import MedsCard from './MedsCard';
import css from '../Pets/Pets.module.css';

function MedsCardList() {
  const [medsArr, setMedsArr] = useState([]);

  async function getMeds() {
    const res = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/meds');
    const dataInJs = await res.json();
    console.log('Meds arr', dataInJs);
    setMedsArr(dataInJs);
  }
  useEffect(() => {
    getMeds();
  }, []);

  return (
    <div className={css.container}>
      {medsArr.map((obj) => (
        <MedsCard key={obj.id} {...obj} />
      ))}
    </div>
  );
}

export default MedsCardList;
