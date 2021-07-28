import React from 'react';
import { useState, useEffect } from 'react';
import { getOneUser } from '../utils/requests';

const EditUser = ({ onEditUserHandler, history, match, createFailledErrors, onSetCreateFailledErrors }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const editedUserId = match.params.id

  useEffect(() => {
    onSetCreateFailledErrors({})

    const getUserData = async () => {
      const userData = await getOneUser(editedUserId)

      const {data:{ oneUser: { name, age, email, password }}} = userData

      setName(name);
      setAge(age);
      setEmail(email);
      setPassword(password);
    }
    getUserData()
  }, [editedUserId,onSetCreateFailledErrors]);

  

  const formSubmitHandler = async (e) => {
    
    e.preventDefault();
    const newUser = {
      name,
      age,
      email,
      password,
    };

    await onEditUserHandler(newUser, editedUserId); 
  };

  const backHandler = () => {
    history.push('/allusers')
  }

  return (
    <>
      <h1 className='text-center my-5'>Redaguoti vartotoją</h1>
      <div className='row'>
        <form className='col-11 col-sm-12 col-md-10 col-xl-8 mx-auto' onSubmit={formSubmitHandler} autoComplete='off'>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label mt-3'>
              Vardas
            </label>
            <input
              value={name}
              type='text'
              className={'form-control ' + (createFailledErrors.name && 'is-invalid')}
              id='name'
              aria-describedby='name'
              onChange={(e) => setName(e.target.value)}
            />
            <div className='invalid-feedback'>Prašome įvesti vartotojo vardą.</div>
          </div>

          <div className='mb-3'>
            <label htmlFor='age' className='form-label'>
              Amžius
            </label>
            <input
              value={age}
              type='number'
              className={'form-control ' + (createFailledErrors.age && 'is-invalid')}
              id='age'
              aria-describedby='age'
              onChange={(e) => setAge(+e.target.value)}
            />
            <div className='invalid-feedback'>Prašome įvesti vartotojo amžių (skaičiais).</div>
          </div>

          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              E-paštas
            </label>
            <input
              value={email}
              type='text'
              className={'form-control ' + (createFailledErrors.email && 'is-invalid')}
              id='email'
              min='1'
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className='invalid-feedback'>Prašome įvesti vartotojo e-paštą.</div>
          </div>

          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>
              Slaptažodis 
            </label>
            <input
              value={password}
              type='text'
              className={'form-control ' + (createFailledErrors.password && 'is-invalid')}
              id='password'
              min='0'
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='invalid-feedback'>Prašome įvesti vartotojo slaptažodį.</div>
          </div>
          

          <button type='submit' className='btn btn-success me-2'>
            Išsaugoti
          </button>
          <button type='button' className='btn btn-warning' onClick={backHandler}>
            Atgal
          </button>
        </form>
      </div>
    </>
  );
};

export default EditUser;

