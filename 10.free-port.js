const net = require("node:net")

function findAvaiablePort(desired_port) {
    return new Promise ((resolve, reject) => {
        const server = net.createServer()
        server.listen(desired_port, () => {
           const port = server.address().port 
           server.close(() => {
                resolve(port)
           })
        })
        server.on('error', (err) => {
            if (err.code === "EADDRINUSE") {
                findAvaiablePort(0).then(port => {
                    resolve(port)
                })
            }
            else {
                reject(err)
            }
        })
    })
}

module.exports = { findAvaiablePort }