const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

app.use([authorize, logger]) // Esta es la manera de usar dos middleware

app.get('/', (req, res)=>{ // A este endpoint no le afecta el logger por estar antes
  res.send('Home')
}) 

app.get('/about',(req,res)=>{
  res.send('About')
})

app.get('/api/products', (req,res)=>{
  res.send('products')
})

app.get('/api/items', (req,res)=>{
  console.log(req.user) // Este usuario viene del middleware authorize
  res.send('items')
})

app.listen(5000, ()=>{
  console.log('Escuchando en puerto 5000')
})