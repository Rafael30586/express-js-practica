const http = require('http')

const server = http.createServer((req, res) => {
  // console.log(req.method) Esto imprime un GET en la consola
  const url = req.url
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' }) // Información sobre MIME types: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types
    res.write('<h1>home page</h1>') // Un ejemplo de MIME type es text/html (tipo/subtipo). Cuando cambiamos el MIME type, el browser va a interpretar la información de forma diferente
    res.end()
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)
