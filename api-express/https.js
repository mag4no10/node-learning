const http = require('node:http')

const PORT = process.env.PORT ?? 8080

const server = http.createServer((request, response) => {
  console.log('Request received')
  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.write('<p>Hello World</p>')
  response.end()
})

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server is listening in http://localhost:${PORT}`)
})
