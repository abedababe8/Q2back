const express = require('express')
const router = express.Router()
const accountController = require('../controllers/accounts')
const authController = require('../controllers/auth')


//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

router.post('/', authController.isAuthenticated, accountController.create)
// router.get('/',
//   authController.isAuthenticated,
//   authController.isAllowed,
//   accountController.get)



module.exports = router
