import React from 'react';
import Button from '../UI/Button';

function AddPet() {
  return (
    <div>
      <form action='' className='form'>
        <input type='text' placeholder='Name' />
        <input type='text' placeholder='Gimtadienis' />
        <input type='email' placeholder='Email' />
        <Button> Add</Button>
      </form>
    </div>
  );
}

export default AddPet;
