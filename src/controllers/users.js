const userModel = require('../models/users')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////
function get(req, res, next){
  accountModel.get(user_id)
  .then()
  res.status(200).json({ data })
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
//////////////////////////////////////////////////////////////////////////////
// Quality of Life functions
//////////////////////////////////////////////////////////////////////////////

module.exports = {
  create,
  get,
  getAllAccounts,
  createAccount
}
