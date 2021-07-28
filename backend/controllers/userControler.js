const User = require('../models/userModel')

// @desc Create a new user
// @route POST /api/users/newuser
// @access Public
const addNewUser = async (req, res) => {
  try {
    const formData = req.body;
    const newUser = new User(formData);
    const createdUser = await newUser.save();
    res.json({ message: 'Add Success', createdUser });
  } catch (error) {
    res.json(error)
  }
}

// @desc Fetch all users 
// @route GET /api/users/allusers
// @access Public
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.json({ message: 'Get Success', allUsers });
  } catch (error) {
    res.json(error)
  }
}

// @desc Delete a user
// @route DELETE /api/users/delete/:id
// @access Public
const deleteUser = async (req, res) => {
  try {
    const objId = req.params.id;
    await User.findByIdAndDelete(objId);
    res.json({ message: 'Delete Success' });
  } catch (error) {
    res.json(error)
  }
}

// @desc Fetch one user 
// @route GET /api/users/getuser/:id
// @access Public
const getOneUser = async (req, res) => {
  try {
    const objId = req.params.id;
    const oneUser = await User.findById(objId);
    res.json({ message: 'GetOne Success', oneUser });
  } catch (error) {
    res.json(error)
  }
};


// @desc Edit a user 
// @route PUT /api/users/edit/:id
// @access Public
const editUser = async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate({_id:req.params.id}, req.body, {new: true, runValidators: true});
    res.json({ message: 'Update Success', updatedUser });
  } catch (error) {
    res.json(error);
  }
};

module.exports = { addNewUser, getAllUsers, deleteUser, getOneUser, editUser };