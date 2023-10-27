// Esto solo en los modulos nativos que no tienen promesas nativas (mjs)

// const { promisify } = require("node:util")
// const readFilePromisify = promisify(fs.readFile)

import { readFile } from "node:fs/promises"


console.log("Leyendo el primer archivo...") 
const text = await readFile("./prueba.txt", "utf-8")
console.log(text)

console.log("Hacer cosas mientras se lee el primer archivo")

console.log("Leyendo el segundo archivo...") 
const text2 = await readFile("./prueba2.txt", "utf-8")
console.log(text2) 