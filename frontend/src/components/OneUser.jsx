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
      <div className='d-block'><strong >Vardas:</strong> {name}</div>
      <div className='d-block'><strong>Amžius:</strong> {age}</div>
       <div className='d-block'><strong>E-paštas:</strong> {email} </div>
      <div className='d-block'><strong>Slaptažodis:</strong> {password}</div>
    </div>
    <div className="d-flex justify-content-center flex-column">
       <Button callback={() => { editHandler(_id) }} color={'btn-warning d-block'}>
        Redaguoti
      </Button>

      <Button callback={() => { onUserDeleteHandler(_id) }} color={'btn-danger d-block'}>
        Ištrinti
      </Button>
    </div>
 </li>
  
  )
}

export default OneUser
