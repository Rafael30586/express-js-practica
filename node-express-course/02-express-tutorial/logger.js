const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time) // Se imprime en la consola de visual studio code, no en el browser
  next()
}

module.exports = logger