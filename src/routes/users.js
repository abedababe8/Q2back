const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

router.post('/', userController.create)



router.get('/:userId/accounts', userController.getAllAccounts)
router.get('/:userId/tags', userController.getAllTags)
router.post('/:userId/accounts', userController.createAccount)
router.post('/:userId/accounts/:accountId/transactions', userController.createTransaction)
router.get('/:userId/accounts/:accountId/transactions', userController.getAllTransactions)
router.delete('/:userId/accounts/:accountId/transactions/:transId', userController.deleteTransaction)
router.post('/:userId/accounts/:accountId/userAcc', userController.createUser_Acc)

module.exports = router
