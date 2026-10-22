const express = require('express')
const app = express()
const logger = require('./logger')

app.get('/', (req, res)=>{ // A este endpoint no le afecta el logger por estar antes
  res.send('Home')
}) 

app.use(logger) // Acá estamos usando el logger en todos los endpoints de abajo

// app.use('/api',logger) // En este caso, el middleware está afectando a los endpoints que contienen /api
// que en este caso son dos (no afecta al endpoint about)

app.get('/about',(req,res)=>{
  res.send('About')
})

app.get('/api/products', (req,res)=>{
  res.send('products')
})

app.get('/api/items', (req,res)=>{
  res.send('items')
})

app.listen(5000, ()=>{
  console.log('Escuchando en puerto 5000')
})