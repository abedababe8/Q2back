const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
//const authController = require('./controllers/auth')


if(process.env.NODE_ENV !== 'production'){
  require('dotenv').load()
}

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())


app.use('/auth', require('./routes/auth'))
app.use('/users', require('./routes/users'))
app.use('/transactions', require('./routes/transactions'))
app.use('/accounts', require('./routes/accounts'))






//DEFAULT
app.use(function(req, res, next){
  next({status: 404, message: 'Route not found' })
})






const port = process.env.PORT || 5000

app.listen(port, function(){
  console.log(`Listening on port ${port}`)
})
