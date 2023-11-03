const fs = require("node:fs/promises")

console.log("Leyendo el primer archivo...")
fs.readFile("./prueba.txt", "utf-8")
    .then(text => {
        console.log(text)
    })

console.log("Hacer cosas mientras se lee el primer archivo")

console.log("Leyendo el segundo archivo...")
fs.readFile("./prueba2.txt", "utf-8")
    .then(text => {
        console.log(text)
    }) 