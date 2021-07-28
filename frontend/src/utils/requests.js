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

export {
  createNewUser,
  fetchAllUsers,
  deleteUser
}