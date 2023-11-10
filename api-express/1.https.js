const http = require('node:http')
const fs = require('node:fs')

const PORT = process.env.PORT ?? 8080

const processRequest = (request, response) => {
  console.log('Request received', request.url)
  if (request.url == "/") {
    response.statusCode = 200
    response.setHeader("Content-Type", "text/html; charset=utf-8")
    response.write("<p>Bienvenido a mi página de inicio</p>")
    response.end()
  }
  else if (request.url == "/contacto" || request.url == "/contacto/") {
    response.statusCode = 200
    response.setHeader("Content-Type", "text/html; charset=utf-8")
    response.write("<p>Esto es contacto</p>")
    response.end()
  }
  else if (request.url == "/image/wallpaper.png") {
    fs.readFile("./assets/1.png", (err, data) => {
      if (err) {
        response.setHeader("Content-Type", "text/html; charset=utf-8")
        statusCode = 404
        response.write("<h1>ERROR 404 NOT FOUND</h1>")
      } 
      else {
        response.setHeader("Content-Type", "image/png")
        statusCode = 200
        response.write(data)
        response.end()
      }
    })

  }
  else {
    response.statusCode = 404
    response.setHeader("Content-Type", "text/html; charset=utf-8")
    response.write("<h1>ERROR 404 NOT FOUND</h1>")
    response.end()
  }
}

const server = http.createServer(processRequest)

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server is listening in http://localhost:${PORT}`)
})
