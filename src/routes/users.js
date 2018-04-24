const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

router.post('/', userController.create)



router.get('/:userId/accounts', userController.getAllAccounts)
router.post('/:userId/accounts', userController.createAccount)



module.exports = router
