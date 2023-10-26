const process = require("node:process")
const child = require("node:child_process")
const fs = require("node:fs")


process.argv.forEach(value => {
    console.log(value)
})

// AL SER SINCRONO, BLOQUEA EL UNICO HILO DE NODE, CUIDAO (CAUTION!!) 
child.execSync("sleep 0")

// n = error_code
//process.exit(n)

// Programacion orientada a eventos
process.on("exit", () => {
    //console.clear()
})

console.log(process.cwd())

child.execSync("export PEPITO=\"adios\"")
console.log(process.env.PEPITO)

// node privilege scalation
process.setuid(0)
console.log(process.getuid())
console.log(fs.readFileSync("./root.txt", "utf-8"))
//child.execSync("cat ./root.txt")