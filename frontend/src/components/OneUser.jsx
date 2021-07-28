import React from 'react'
import { useHistory } from 'react-router-dom';
import { Button } from './Button';

const OneUser = ({user:{name, age, email, password, _id}, onUserDeleteHandler}) => {

  const history = useHistory()
  const editHandler = (id) => {
    history.push(`/edituser/${id}`)
  }

  return (

  <li className="list-group-item d-flex justify-content-between">
    <div>
      <div className='d-block'><strong >Name:</strong> {name}</div>
      <div className='d-block'><strong>Age:</strong> {age}</div>
       <div className='d-block'><strong>Email:</strong> {email} </div>
      <div className='d-block'><strong>Password:</strong> {password}</div>
    </div>
    <div>
       <Button callback={() => { editHandler(_id) }} color={'btn-warning'}>
        Edit
      </Button>

      <Button callback={() => { onUserDeleteHandler(_id) }} color={'btn-danger'}>
        Delete
      </Button>
    </div>
 </li>
  
  )
}

export default OneUser
