const express = require('express')
const app = express()
let {people} = require('./data')

app.use(express.static('./methods-public'))

app.use(express.urlencoded({extended:false})) // Este middleware sirve para obtener un objeto a partir de los argumentos
// provenientes de un formulario, aunque también se puede obtener un objeto a partir de una solicitud de postman

app.get('/api/people/',(req, res)=>{
  res.status(200).json({success:true, data:people})
})

app.post('/login', (req,res)=>{
  const {name} = req.body
  if(name){
    return res.status(200).send(`Bienvenido ${name}`)

  }
  res.status(401).send('Pro favor, proveé credenciales')
})

app.post('/saludo', (req,res)=>{ // Para que este funcione en postman, hay que hacer que el body de la solicitud
  console.log(req.body)// sea de formato x-www-form.urlencoded y colocar los campos con sus correspondientes valores
  res.send('Hola')
})


app.listen(5000, ()=>{
  console.log('Escuchando en puerto 5000')
})