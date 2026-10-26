const express = require('express')
const app = express()
const people = require('./router/people')

app.use('/api/people', people) // Acá estamos usando el router del archivo people que está en la carpeta router


app.use(express.static('./methods-public'))

app.use(express.urlencoded({extended:false})) // Este middleware sirve para obtener un objeto a partir de los argumentos
// provenientes de un formulario, aunque también se puede obtener un objeto a partir de una solicitud de postman

app.use(express.json())


app.listen(5000, ()=>{
  console.log('Escuchando en puerto 5000')
})