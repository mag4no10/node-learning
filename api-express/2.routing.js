const http = require("node:http")
const fs = require("node:fs")

const dittoJSON = require("./ditto.json")


const PORT = process.env.PORT ?? 8080

function processRequest(request, response) {
    console.log('Request received', request.url)
    const {method, url} = request
    switch(method) {
        case "GET": {
            switch (url) {
                case "/pokemon/ditto": {
                    response.setHeader('Content-Type', 'application/json; charset=utf-8')
                    response.write(JSON.stringify(dittoJSON))
                    response.end()
                    break;
                }
                default: {
                    response.statusCode = 404
                    response.setHeader("Content-Type", "text/html; charset=utf-8")
                    fs.readFile("./404.html", (err, data) => {
                        response.write(data)
                        response.end()
                    })
                    break;
                }
            }
            break;
        }
        case "POST": {
            switch (url) {
                case "/pokemon": {
                    let body = ""
                    request.on("data", chunk => {
                        body += chunk.toString()
                    })
                    request.on('end', () => {
                        const data = JSON.parse(body)
                        // llamar a una base de datos para guardar la info
                        response.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
                        data.timestamp = Date.now()
                        response.write(JSON.stringify(data))
                        response.end()
                    })
                    break;
                }
                default: {
                    response.statusCode = 404
                    response.setHeader("Content-Type", "text/html; charset=utf-8")
                    fs.readFile("./404.html", (err, data) => {
                        response.write(data)
                        response.end()
                    })
                    break;
                }
            }
            break;
        }
        default: {

            break;
        }
    }
} 

const server = http.createServer(processRequest)

server.listen(PORT, "127.0.0.1", () => {
    console.log(`Server is listening in http://localhost:${PORT}`)
})