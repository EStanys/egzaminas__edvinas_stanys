import axios from 'axios'

const URL = 'http://localhost:4000/api/users'

const createNewUser = async (newUserData) => {
  try {
    
    const createdUser = await axios.post(`${URL}/newuser`, newUserData);
   
    if(createdUser.data.message === 'Add Success'){
      return { msg: 'createSuccess', data: createdUser };
    }

    if (createdUser.data.errors) {
      return { msg: 'createFail', errors:createdUser.data.errors}
    }
    
  } catch (error) {
    throw new Error(error);
  }
}

const fetchAllUsers = async () => {
  try {
    const allUsers = await axios.get(`${URL}/allusers`);
    return allUsers;
  } catch (error) {
    throw new Error(error);
  } 
}

const deleteUser = async (id) => {
  try {
    const deletedUser = await axios.delete(`${URL}/delete/${id}`);
    return deletedUser;
  } catch (error) {
    throw new Error(error);
  } 
}

const getOneUser = async (id) => {
  try {
    const oneUser = await axios.get(`${URL}/getuser/${id}`);
    return oneUser;
  } catch (error) {
    throw new Error(error);
  }
}

const editUser = async (userNewData, id) => {
  try {
    const editedUser = await axios.put(`${URL}/edit/${id}`, userNewData);

    console.log('cia', editedUser.data);

    if(editedUser.data.message === 'Update Success'){
      return { msg: 'updateSuccess', data: editedUser };
    }

    if (editedUser.data.errors) {
      return { msg: 'updateFail', errors:editedUser.data.errors}
    }


    // return { msg: 'success', data: editedUser };
  } catch (error) {
    throw new Error(error);
  }
}

export {
  createNewUser,
  fetchAllUsers,
  deleteUser,
  getOneUser,
  editUser
}