const express = require('express')
const app = express()
app.use(express.json()) // Este middleware sirve para que la extraer los datos del body de la solicitud

app.post('/', (req,res)=>{
  console.log(req.body)
  res.send()
})


app.listen(5000, ()=>{
  console.log('Escuchando en puerto 5000')
})