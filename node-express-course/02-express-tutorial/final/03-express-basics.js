const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log('user hit the resource')
  res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})

app.all('*', (req, res) => { // Sirve para los errores porque aplica para todas las urls diferentes a las anteriores. Para que funcione así debe escribirse después...
  res.status(404).send('<h1>resource not found</h1>')//... de los otros métodos (como en este caso)
})

app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
