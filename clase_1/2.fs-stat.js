const fs = require("node:fs")

const stats = fs.statSync("./prueba.txt")

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isBlockDevice(),
    stats.isSymbolicLink(),
    stats.size
) 