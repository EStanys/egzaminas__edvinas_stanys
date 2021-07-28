import { useState, useEffect } from 'react'
import { Switch, Route, useHistory, Redirect } from 'react-router-dom'
import { createNewUser, deleteUser, editUser, fetchAllUsers } from './utils/requests';
import MainHeader from './components/MainHeader';
import Home from './pages/Home';
import NewUser from './pages/NewUser';
import AllUsers from './pages/AllUsers';
import EditUser from './pages/EditUser';
import './App.css';

function App() {

  const [createSuccess, setCreateSuccess] = useState(false);
  const [createFailledErrors, setCreateFailledErrors] = useState({});
  const [allUsers, setAllUsers] = useState([])

  const history = useHistory()
  
  useEffect(() => {
    getAllUsers()
  }, [])

const setCreateSuccessAlert = () => {
    setTimeout(function () {
      setCreateSuccess(false);
    }, 5000);
    
  }

  const getAllUsers = async () => {
    const resp = await fetchAllUsers()
    const { allUsers } = resp.data;
    setAllUsers(allUsers);
  }

  const createFormHandler = async (newUser) => {
    const res = await createNewUser(newUser)

    if (res.msg === 'createFail') {
      setCreateFailledErrors(res.errors);
    }

    if (res.msg === 'createSuccess') {
      setCreateSuccess(true);
      setCreateSuccessAlert();
      setCreateFailledErrors({})
    } 
    await getAllUsers();
  }

  const deleteUserHandler = async (id) => {
    await deleteUser(id)
    await getAllUsers()
  }

  const editUserHandler = async (newCardData, id) => {
    const res = await editUser(newCardData, id)

    if (res.msg === 'updateFail') {
      setCreateFailledErrors(res.errors);
    }

    if (res.msg === 'updateSuccess') {
      setCreateSuccess(true);
      setCreateSuccessAlert();
      setCreateFailledErrors({})
      await getAllUsers();
      await history.push('/allusers')
    } 
  }

  return (
    <div className="App">
      <MainHeader/>
      <div className='container'>
        <Switch>
          <Route
            path='/edituser/:id'
            render={(props) => 
            <EditUser 
              {...props} 
              onEditUserHandler={editUserHandler} 
              createFailledErrors={createFailledErrors}
              onSetCreateFailledErrors={setCreateFailledErrors} />}
          />
          <Route
            path='/allusers'
            render={(props) => (
              <AllUsers
                {...props}
                allUsers={allUsers}
                onUserDeleteHandler={deleteUserHandler}
              />
            )}
          />
          <Route
            path='/newuser'
            render={(props) => (
              <NewUser
                {...props}
                onCreateFormHandler={createFormHandler}
                createSuccess={createSuccess}
                createFailledErrors={createFailledErrors}
                onSetCreateFailledErrors={setCreateFailledErrors}
              />
            )}
          />
          <Route path='/home' render={(props) => <Home {...props} />} />
          <Route path='/' exact>
            <Redirect to='/home'></Redirect>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
