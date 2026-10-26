const express = require('express')
const app = express()
let {people} = require('./data')

app.use(express.static('./methods-public'))

app.use(express.urlencoded({extended:false})) // Este middleware sirve para obtener un objeto a partir de los argumentos
// provenientes de un formulario, aunque también se puede obtener un objeto a partir de una solicitud de postman

app.use(express.json())

app.post('/login', (req,res)=>{
  const {name} = req.body
  if(name){
    return res.status(200).send(`Bienvenido ${name}`)

  }
  res.status(401).send('Pro favor, proveé credenciales')
})

app.get('/api/people/',(req, res)=>{
  res.status(200).json({success:true, data:people})
})

app.post('/api/people', (req,res)=>{
  const {name} = req.body
  if(!name){
    return res.status(400).json({success:false, mgs: 'por favor proveé de un nombre'})
  }
  res.status(201).send({success:true, person: name})

})



app.post('/saludo', (req,res)=>{ // Para que este funcione en postman, hay que hacer que el body de la solicitud
  console.log(req.body)// sea de formato x-www-form.urlencoded y colocar los campos con sus correspondientes valores
  res.send('Hola')
})

app.put('/api/people/:id', (req,res)=>{
  const {id} = req.params
  const {name} = req.body
  // res.send(`El id es igual a ${id}`)
  // res.send('Funciona')
  console.log(id, name)
  // res.send('Hola mundo')

  const person = people.find(person => person.id === Number(id))

  if(!person){
    return res
    .status(404)
    .json({success:false, msg: `No hay ninguna persona con el id ${id}`})
  }

  const newPeople = people.map(person=>{
    if(person.id === Number(id)){
      person.name = name
    }
    return person
  })
  res.status(200).json({success:true, data: newPeople})

})

app.delete('/api/people/:id', (req,res)=>{
  const person = people.find(person => person.id === Number(req.params.id))

  if(!person){
    return res
    .status(404)
    .json({success:false, msg: `No hay ninguna persona con el id ${req.params.id}`})
  }

  const newPeople = people.filter((person)=> person.id !== Number(req.params.id))
  people = newPeople
  return res.status(200).json({success:true, data: newPeople})
})


app.listen(5000, ()=>{
  console.log('Escuchando en puerto 5000')
})