// .js  --> por defecto utiliza CommonJS
// .mjs --> para utilizar ES Modules
// .cjs --> para forzar CommonJS

import { sum, sub, mult, div } from "./sum.mjs"

console.log(sum(1, 2))
console.log(sub(2, 1))
console.log(mult(2, 2))
console.log(div(2, 1))