import { readFile } from "node:fs/promises"

Promise.all([
    readFile("./prueba.txt", "utf-8"),
    readFile("./prueba2.txt", "utf-8")
]).then(([text, text2]) => {
    console.log("Primer texto: ", text)
    console.log("Segundo texto:" , text2)
})