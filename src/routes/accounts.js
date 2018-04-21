const express = require('express')
const router = express.Router()
const accountController = require('../controllers/accounts')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

// router.post('/', authController.isAuthenticated, accountController.create)
// router.get('/:accountID',
//   authController.isAuthenticated,
//   authController.isAllowed,
//   accountController.get)



module.exports = router
