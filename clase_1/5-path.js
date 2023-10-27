const path = require("node:path");

// unir rutas con path.join()

console.log(path.sep)
// tengo esta ruta => /content/subfolder/test.txt
const file_path = path.join("/content", "/content", "test.txt") 
console.log(file_path)

// file_path => /content/subfolder/test.txt

// basename retorna el nombre del archivo => test.txt
const base = path.basename(file_path)
const base_sin_extension = path.basename(file_path, ".txt")

// extname retorna la extensión del archivo => .txt
const extension = path.extname(file_path) 