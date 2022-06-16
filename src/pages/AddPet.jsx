import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddContainer from '../components/AddContainer/AddContainer';
import Button from '../UI/Button';

function AddPet() {
  const [nameValue, setNameValue] = useState('');
  const [gimValue, setGimValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  const [postResponse, setPostResponse] = useState({ err: 'error' });

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

    setPostResponse(dataInJs);
  }
  function clearStateAndInputs() {
    setPostResponse({ err: 'error' });
    setEmailValue('');
    setGimValue('');
    setNameValue('');
  }
  return (
    <AddContainer>
      {postResponse.err ? (
        <form onSubmit={addNewPet} className="form">
          {postResponse.err !== 'error' && <h2 className="error">Neteisingi duomenys</h2>}
          <h1>Add new pet</h1>

          <input
            onChange={nameHandler}
            value={nameValue}
            type="text"
            placeholder="Name"
          />
          <input
            onChange={gimHandler}
            value={gimValue}
            type="date"
            placeholder="Gimtadienis 2022-02-01 "
          />
          <input
            onChange={emailHandler}
            value={emailValue}
            type="email"
            placeholder="Email"
          />
          <Button> Add</Button>
        </form>
      ) : (
        <div className="success">
          <h2>Pet added successfully</h2>
          <Link to={'pets'}>
            <Button>Go to Pet List</Button>
          </Link>

          <Link to={'add'}>
            <Button onClick={clearStateAndInputs}>Add more pets</Button>
          </Link>
        </div>
      )}
    </AddContainer>
  );
}

export default AddPet;
