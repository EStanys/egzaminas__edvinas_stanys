import axios from 'axios'

const URL = 'http://localhost:4000/api/users'

const createNewUser = async (newUserData) => {
  try {
    const createdUser = await axios.post(`${URL}/newuser`, newUserData);
   
    if(createdUser.data.message === 'Add Success'){
      return { msg: 'createSuccess', data: createdUser };
    }

    if (createdUser.data.message === 'Add Failed') {
      return { msg: 'createFail', errors:createdUser.data.error.errors}
    }
    
  } catch (error) {
    throw new Error(error);
  }
}

export {
  createNewUser,
}