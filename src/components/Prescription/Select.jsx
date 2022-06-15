import React, { useEffect, useState } from 'react';

function Select({ data }) {
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
  function selectoValue(e) {
    e.preventDefault();
    // console.log(e.target.value);
    data(e.target.value);
  }
  return (
    <select onChange={selectoValue} name='' id=''>
      {medsArr.map((obj) => (
        <option key={obj.id} value={obj.id}>
          {obj.name}
        </option>
      ))}
    </select>
  );
}

export default Select;
