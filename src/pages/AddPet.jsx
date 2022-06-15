import { useState } from 'react';
import Button from '../UI/Button';

function AddPet() {
  const [nameValue, setNameValue] = useState('');
  const [gimValue, setGimValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  const [newPet, setNewPet] = useState({});
  const newId = Math.random().toString().split('.')[1];

  console.log(newId);
  function nameHandler(event) {
    setNameValue(event.target.value);
  }
  function gimHandler(event) {
    setGimValue(event.target.value);
  }
  function emailHandler(event) {
    setEmailValue(event.target.value);
  }
  function addNewPet(e) {
    e.preventDefault();
    const newPet = {
      name: nameValue,
      dob: gimValue,
      client_email: emailValue,
    };
    console.log(newPet);
    sendValue(newPet);
  }
  async function sendValue(newPet) {
    const res = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/pets', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newPet),
    });
    const dataInJs = await res.json();
    setNewPet(dataInJs);
    console.log(dataInJs);
  }
  return (
    <div>
      <h1>Add new pet</h1>

      <form onSubmit={addNewPet} className='form'>
        <input onChange={nameHandler} value={nameValue} type='text' placeholder='Name' />
        <input
          onChange={gimHandler}
          value={gimValue}
          type='date'
          placeholder='Gimtadienis 2022-02-01 '
        />
        <input onChange={emailHandler} value={emailValue} type='email' placeholder='Email' />
        <Button> Add</Button>
      </form>
    </div>
  );
}

export default AddPet;
