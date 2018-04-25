const userModel = require('../models/users')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////
function createTransaction(req, res, next){
  userModel.getUser_Acc(req.params.userId, req.params.accountId)
  .then(function(user_Acc){
    let user_acc_id = user_Acc.id
    return userModel.createTransaction(user_acc_id, req.body.tag, req.body.memo, req.body.deposit, req.body.amnt)
  })
  .then(function(data){
      res.status(200).json({data})
  })
  .catch(next)
}

function getAllTransactions(req, res, next){
  userModel.getUser_Acc(req.params.userId, req.params.accountId)
  .then(function(user_Acc){
    let user_acc_id = user_Acc.id
    return userModel.getAllTransactions(user_acc_id)
  })
  .then(function(data){
      res.status(200).json({data})
  })
  .catch(next)
}

function create(req, res, next){
  if(!req.body.username){
    return next({ status: 400, message: 'Bad username'})
  }

  if(!req.body.password){
    return next({ status: 400, message: 'Bad username'})
  }

  userModel.create(req.body.username, req.body.password)
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
  create,
  getAllAccounts,
  createAccount,
  getAllTags
}
