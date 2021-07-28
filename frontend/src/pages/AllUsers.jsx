import React from 'react'
import OneUser from '../components/OneUser';

const AllUsers = ({allUsers, onUserDeleteHandler}) => {
  return (
    <div>
      <h1 className='text-center my-5'>Visi vartotojai</h1>
      {allUsers.length === 0 && (
        <div className='alert alert-danger' role='alert'>
          Atsiprašome, tačiau šiuo metu nėra pridėtų vartotojų.
        </div>
      )}
      <div className='row'>
        <ul className="list-group col-11 col-sm-12 col-md-10 col-xl-8 mx-auto">
          {allUsers.map((user) => (
          <OneUser onUserDeleteHandler={onUserDeleteHandler} user={user} key={user._id} />
        ))}
        </ul>
      </div>
    </div>
  );
}

export default AllUsers
