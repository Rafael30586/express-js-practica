const express = require('express')
const app = express()
const authorize = require('./authorize')
const logger = require('./logger')
const morgan = require('morgan')

app.use(morgan('tiny'))

app.get('/',(req,res)=>{
  res.send('hola')
})


app.listen(5000, ()=>{
  console.log('Escuchando en puerto 5000')
})