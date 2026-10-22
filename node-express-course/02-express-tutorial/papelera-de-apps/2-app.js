const express = require('express')
const path = require('path')
const app = express()

// establecer archivos estáticos y middleware
app.use(express.static('./public'))

/*
app.get('/',(req, res)=>{
  respuesta = res.constructor.name
  res.sendFile(path.join(__dirname,'./navbar-app/index.html'))
  // añadiendo contenido estático a assets
  // Este código ya no hace falta porque se estableció a el directorio public 
  // como contenedor de contenido estático. Además, hay un archivo llamado 
  // index.html en dicho directorio que corresponde a la ruta / de la aplicación
})*/

app.all('*',(req,res)=>{
  res.status(404).send('Resource not found')
})

app.listen(5000, ()=>{
  console.log(`Escuchando en puerto 5000`)
})