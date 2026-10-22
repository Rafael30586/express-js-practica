const os = require('os') // os es por operating system. Es un módulo contruido en node

const user = os.userInfo() // Información sobre el usuario
console.log(user)

console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)