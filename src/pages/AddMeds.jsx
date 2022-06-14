import { useState } from 'react';
import Button from '../UI/Button';

function AddMeds() {
  const [nameValue, setNameValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');

  const [newMed, setNewMed] = useState({});
  const newId = Math.random().toString().split('.')[1];

  console.log(newId);
  function nameHandler(event) {
    setNameValue(event.target.value);
  }
  function descriptionHandler(event) {
    setDescriptionValue(event.target.value);
  }
  function addNewMed(e) {
    e.preventDefault();
    const newMed = {
      name: nameValue,
      description: descriptionValue,
    };
    console.log(newMed);
    sendValue(newMed);
  }
  async function sendValue(newMed) {
    const res = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/meds/', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newMed),
    });
    const dataInJs = await res.json();
    console.log(dataInJs);
    // setNewMed(dataInJs);
  }
  return (
    <div>
      <form onSubmit={addNewMed} className='form'>
        <input onChange={nameHandler} value={nameValue} type='text' placeholder='Name' />
        <input
          onChange={descriptionHandler}
          value={descriptionValue}
          type='text'
          placeholder='Description'
        />

        <Button> Add</Button>
      </form>
    </div>
  );
}

export default AddMeds;
