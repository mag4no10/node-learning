/* CALLBACK
const fs = require('node:fs');

fs.readdir('./', (err, files) => {
    if (err) {
        console.error("Error al leer el directorio: ", err);
        return;
    }
    //console.log(files); // json format
    files.forEach(file => {
        console.log(file);
    });
})
*/

// PROMISES
const fs = require("node:fs/promises");

fs.readdir("./")
    .then(files => {
        //console.log(files); json format
        files.forEach(file => {
            console.log(file);
        })
    })
    .catch(err => {
        console.error(err);
    })