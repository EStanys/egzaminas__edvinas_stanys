import { useState, useEffect } from 'react'
import { Switch, Route, useHistory, Redirect } from 'react-router-dom'

import './App.css';
import MainHeader from './components/MainHeader';
import Home from './pages/Home';
import NewUser from './pages/NewUser';
import { createNewUser } from './utils/requests';



function App() {

  const [createSuccess, setCreateSuccess] = useState(false);
  const [createFailledErrors, setCreateFailledErrors] = useState({});

const setCreateSuccessAlert = () => {
    setTimeout(function () {
      setCreateSuccess(false);
    }, 5000);
    
  }

  const createFormHandler = async (newUser) => {
    const res = await createNewUser(newUser)

    if (res.msg === 'createSuccess') {
      setCreateSuccess(true);
      setCreateSuccessAlert();
      setCreateFailledErrors({})
    } 

    if (res.msg === 'createFail') {
      setCreateFailledErrors(res.errors);
    }
    // await getAllServicesGoods();
  }




  return (
    <div className="App">
      <MainHeader/>
      <div className='container'>
        <Switch>
          {/* <Route
            path='/editservisesgoods/:id'
            render={(props) => <EditServiceGoods {...props} onEditFormHandler={editFormHandler} />}
          /> */}
          {/* <Route
            path='/allservisesgoods'
            render={(props) => (
              <ServicesAndGoods
                {...props}
                allServicesGoods={allServicesGoods}
                onDeleteHandler={deleteHandler}
                onFilter={filterServicesGoods}
                onGetAllServicesGoods={getAllServicesGoods}
              />
            )}
          /> */}
          <Route
            path='/newuser'
            render={(props) => (
              <NewUser
                {...props}
                onAddFormHandler={createFormHandler}
                createSuccess={createSuccess}
                createFailledErrors={createFailledErrors}
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
