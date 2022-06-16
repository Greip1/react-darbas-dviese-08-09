import { useState } from 'react';
import { useParams } from 'react-router-dom';
import AddContainer from '../components/AddContainer/AddContainer';
import Button from '../UI/Button';

function AddLog() {
  const { petId } = useParams();

  const [statusValue, setStatusValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');

  const [newLog, setNewLog] = useState({});

  function statusHandler(event) {
    setStatusValue(event.target.value);
  }
  function descriptionHandler(event) {
    setDescriptionValue(event.target.value);
  }
  function addNewLog(e) {
    e.preventDefault();
    const newLog = {
      pet_id: petId,
      description: descriptionValue,
      status: statusValue,
    };
    console.log(newLog);
    sendValue(newLog);
  }
  async function sendValue(newLog) {
    const res = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/logs/', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newLog),
    });
    const dataInJs = await res.json();
    console.log(dataInJs);
  }
  return (
    <AddContainer>
      <h1>Add new log</h1>
      <form onSubmit={addNewLog} className="form">
        <input
          onChange={statusHandler}
          value={statusValue}
          type="text"
          placeholder="Status"
        />
        <input
          onChange={descriptionHandler}
          value={descriptionValue}
          type="text"
          placeholder="Description"
        />

        <Button> Add</Button>
      </form>
    </AddContainer>
  );
}

export default AddLog;
