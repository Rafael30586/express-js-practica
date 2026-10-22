const express = require('express')
const app = express()

app.get('/', (req,res)=>{
  console.log('user hit the resorce')
  res.status(200).send('home page')
})

app.get('/about',(req,res)=>{
  res.status(200).send('About page')
})

app.all('*', (req,res)=>{
  res.status(404).send('<h1>Resource not found</h1>')

})

app.listen(5000, ()=>{
  console.log('El servidor está escuchando en el puerto 5000')
  console.log(app.constructor.name)
})