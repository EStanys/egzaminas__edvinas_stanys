import React from 'react';
import { useState, useEffect } from 'react';

const NewUser = ({ onAddFormHandler, history, createSuccess, createFailledErrors }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setName('');
    setAge('');
    setEmail('');
    setPassword('');
  }, [createSuccess]);

  const formSubmitHandler = async (e) => {
    
    e.preventDefault();
    const newUser = {
      name,
      age,
      email,
      password,
      
    };
    await onAddFormHandler(newUser); 

  };
  
  const backHandler = () => {
    history.push('/allusers');
  };


  return (
    <>
      {createSuccess && (
        <div className={'alert alert-success w-75 mx-auto successMsg'} role='alert'>
          Successfully created
        </div>
      )}
      <h1 className='text-center my-5'>Create New User</h1>
      <div className='row'>
        <form className='col-11 col-sm-12 col-md-10 col-xl-8 mx-auto' onSubmit={formSubmitHandler} autoComplete='off'>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label mt-3'>
              Name
            </label>
            <input
              value={name}
              type='text'
              className={'form-control ' + (createFailledErrors.name && 'is-invalid')}
              id='name'
              aria-describedby='name'
              onChange={(e) => setName(e.target.value)}
            />
            <div className='invalid-feedback'>Please enter a name.</div>
          </div>

          <div className='mb-3'>
            <label htmlFor='age' className='form-label'>
              Age
            </label>
            <input
              value={age}
              type='number'
              className={'form-control ' + (createFailledErrors.age && 'is-invalid')}
              id='age'
              aria-describedby='age'
              onChange={(e) => setAge(+e.target.value)}
            />
            <div className='invalid-feedback'>Please enter an age of new user.</div>
          </div>

          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              value={email}
              type='text'
              className={'form-control ' + (createFailledErrors.email && 'is-invalid')}
              id='email'
              min='1'
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className='invalid-feedback'>Please enter an email.</div>
          </div>

          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>
              Password 
            </label>
            <input
              value={password}
              type='text'
              className='form-control'
              id='password'
              min='0'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type='submit' className='btn btn-success me-2'>
            Create
          </button>
          <button type='button' className='btn btn-warning' onClick={backHandler}>
            Back
          </button>
        </form>
      </div>
    </>
  );
};

export default NewUser;

