import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Select from '../components/Prescription/Select';
import Button from '../UI/Button';

const AddPrescriptions = () => {
  const { petId } = useParams();
  console.log(petId);

  const [medId, setmedId] = useState('');
  const [commentValue, setCommentValue] = useState('');

  //   const [newLog, setNewLog] = useState({});

  //   function medHandler(event) {
  //     setmedValue(event.target.value);
  //   }
  function commentHandler(event) {
    setCommentValue(event.target.value);
  }
  function addNewPres(e) {
    e.preventDefault();
    const newLog = {
      pet_id: petId,
      comment: commentValue,
      medication_id: medId,
    };
    console.log(newLog);
    sendValue(newLog);
  }
  async function sendValue(newLog) {
    const res = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/prescriptions/', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newLog),
    });
    const dataInJs = await res.json();
    console.log(dataInJs);
  }
  function getSelectValue(selectValue) {
    console.log('selecto reiksme', selectValue);
    setmedId(selectValue);
  }

  return (
    <div>
      <h1>Add prescription</h1>
      <form onSubmit={addNewPres} className='form'>
        <Select data={getSelectValue} />
        <input onChange={commentHandler} value={commentValue} type='text' placeholder='comment' />
        <Button> Add</Button>
      </form>
    </div>
  );
};

export default AddPrescriptions;
