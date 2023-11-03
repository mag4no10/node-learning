const { readFile } = require("node:fs/promises");


// IIFE - Immediately Invoked Function Expression
(
    async () => {
        console.log("Leyendo el primer archivo...") 
        const text = await readFile("./prueba.txt", "utf-8")
        console.log(text)
    
        console.log("Hacer cosas mientras se lee el primer archivo")
    
        console.log("Leyendo el segundo archivo...") 
        const text2 = await readFile("./prueba2.txt", "utf-8")
        console.log(text2)
    }
)()



/*
 
async function init() {
    console.log("Leyendo el primer archivo...") 
    const text = await readFile("./prueba.txt", "utf-8")
    console.log(text)

    console.log("Hacer cosas mientras se lee el primer archivo")

    console.log("Leyendo el segundo archivo...") 
    const text2 = await readFile("./prueba2.txt", "utf-8")
    console.log(text2)
}

init()

*/
