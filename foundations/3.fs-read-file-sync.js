const fs = require("node:fs")

console.log("Leyendo el primer archivo...") 
const text = fs.readFileSync("./prueba.txt", "utf-8")
console.log(text)

console.log("Hacer cosas mientras se lee el primer archivo")

console.log("Leyendo el segundo archivo...") 
const text2 = fs.readFileSync("./prueba2.txt", "utf-8")
console.log("text2") 