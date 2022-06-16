import { useEffect, useState } from 'react';
import { getFetch } from '../Helper/fetch';

function Search({ title }) {
  const [inputValue, setInputValue] = useState();
  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
    getFetch('pets', setDataArr);
  }, []);

  function inputHandler(event) {
    findObj(event.target.value);
    setInputValue(event.target.value);
  }

  function findObj(x) {
    const foundOb = dataArr.filter((ob) =>
      ob.name.toLowerCase().includes(x.toLowerCase())
    );
    console.log('foundOb', foundOb);
    setDataArr(foundOb);
  }

  return (
    <div>
      <i className="fa fa-search" aria-hidden="true"></i>
      <input onInput={inputHandler} className="" type="search" placeholder={`${title}`} />
    </div>
  );
}

export default Search;
