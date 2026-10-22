const express = require('express')
const app = express()
const {products} = require('./data')

/*
app.get('/',(req,res)=>{
  res.json(products)

})*/

app.get('/',(req, res)=>{
  res.send('<h1>Home page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req,res)=>{
  const newProducts = products.map((product)=>{
    const {id,name, image} = product
    return {id, name, image}
  })
  res.json(newProducts)
})

app.get('/api/products/:productId', (req,res)=>{
  // console.log(req.params)
  const {productId} = req.params
  const singleProduct = products.find((product)=> product.id === Number(productId))

  if(!singleProduct){
    return res.status(404).send('El producto no existe')
  }
  return res.json(singleProduct)
})

app.get('/api/products/:productId/reviews/:reviewId', (req, res)=>{
  console.log(req.params)
  res.send('Hola mundo')
})

app.get('/api/v1/query', (req,res)=>{
  console.log(req.query)
  res.send('hola mundo')
  console.log(res.constructor.name)
})

app.get('/persona', (req,res)=>{
  const persona = {
    nombre: 'Rafael',
    apellido: 'Alvarez'
  }

  res.status(200).json(persona)
})

app.listen(5000, ()=>{
  console.log('Escuchando en puerto 5000')
})