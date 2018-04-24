const db = require('../../db')
const bcrypt = require('bcrypt-as-promised')
// const userModel = require('./users')


function getOne(account_id){
  return (
    db('accounts')
    .where({ id: account_id })
    .first()
  )
}

function create(name){
  return (
    db('accounts')
    .insert({ NameOfAccount: accName })
    .returning('*')
  )
}
module.exports = {
  getOne, create
}
