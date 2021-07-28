const { addNewUser, getAllUsers, deleteUser, getOneUser, editUser } = require('../controllers/userControler');
const express = require('express')

const router = express.Router()

router.route('/newuser').post(addNewUser)
router.route('/allusers').get(getAllUsers)
router.route('/delete/:id').delete(deleteUser)
router.route('/getuser/:id').get(getOneUser)
router.route('/edit/:id').put(editUser)

module.exports = router