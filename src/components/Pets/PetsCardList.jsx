import { useEffect, useState } from 'react';
import PetsCard from './PetsCard';
import css from './Pets.module.css';

function PetsCardList() {
  const [petsArr, setPetsArr] = useState([]);

  async function getPets() {
    const res = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/pets/');
    const dataInJs = await res.json();
    console.table('Pets arr', dataInJs);
    setPetsArr(dataInJs);
  }
  useEffect(() => {
    getPets();
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
