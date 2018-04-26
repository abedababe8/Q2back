const userModel = require('../models/users')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////
function createTransaction(req, res, next){
  return userModel.createTransaction(req.params.accountId, req.params.userId, req.body.tag, req.body.memo, req.body.deposit, req.body.amnt)
  .then(function(data){
      res.status(200).json({data})
  })
  .catch(next)
}

function getAllTransactions(req, res, next){
  return userModel.getAllTransactions(req.params.accountId)
  .then(function(data){
      res.status(200).json({data})
  })
  .catch(next)
}

function createUser_Acc(req, res, next){
  userModel.getOneByUserName(req.body.findUser)
  .then(function(foundUser){
    let foundUserId = foundUser.id
    return userModel.createUser_Acc(foundUserId, req.params.accountId)
  })
  .then(function(newUser_Acc){
    res.status(201).send({newUser_Acc})
  })
  .catch(next)
}

function deleteTransaction(req, res, next){
  userModel.deleteTransaction(req.params.transId)
  .then(function(deletedTrans){
    res.status(200).send({deletedTrans})
  })
}

function create(req, res, next){
  if(!req.body.new_username){
    return next({ status: 400, message: 'Bad username'})
  }

  if(!req.body.new_password){
    return next({ status: 400, message: 'Bad username'})
  }
  console.log(req.body);
  userModel.create(req.body.new_username, req.body.new_password)
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}



function getAllAccounts(req, res, next){

   userModel.getAllAccounts(req.params.userId)
  .then(function(data){
    // console.log('hey!', data);
    return res.status(200).send(data)
  })
}
function createAccount(req, res, next){
  userModel.createAccount(req.body.accName)
  .then(function(newAcc){
    newAccId = newAcc[0].id
    userModel.createUser_Acc(req.params.userId, newAccId)
    .then(function(data){
      return res.status(200).send(data)
    })
  })
}
function getAllTags(req, res, next){
  userModel.getAllTags()
  .then(function(tags){
    return res.status(200).send(tags)
  })
}
//////////////////////////////////////////////////////////////////////////////
// Quality of Life functions
//////////////////////////////////////////////////////////////////////////////

module.exports = {
  createTransaction,
  getAllTransactions,
  createUser_Acc,
  deleteTransaction,
  create,
  getAllAccounts,
  createAccount,
  getAllTags
}
