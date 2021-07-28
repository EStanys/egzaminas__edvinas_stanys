import React from 'react'
import { Button } from '../components/Button'

const Home = ({history}) => {
  const showAllUsersHandler = () => {
    history.push('/allusers')
  }
  return (
    <div>
      <h1 className='text-center my-5'>Sveiki prisijungę prie vartotojų duomenų bazės!</h1>
      <h5 className='text-center my-5'>Norėdami matyti visus vartotojus paspauskite žemiau esantį mygtuką </h5>
      <div className='text-center'>
          <Button callback={showAllUsersHandler} color='btn-primary'>Rodyti visus vartotojus</Button>
      </div>
      
    </div>
  )
}

export default Home
