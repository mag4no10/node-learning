const http = require("node:http")
const { findAvaiablePort } = require("./10.free-port")

const PORT = process.env.PORT ?? 8080

const server = http.createServer((request, response) => {
    console.log("Request received")
    response.end("Hello World")
})

findAvaiablePort(PORT).then(port => {
    server.listen(port, "127.0.0.1", () => {
        console.log(`Server is listening in http://localhost:${port}`)
    })
})