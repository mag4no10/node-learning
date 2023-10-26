const fs = require("node:fs/promises");
const process = require("node:process")

let dir = process.argv.at(2)
if (dir == null || dir == undefined) {
    dir = "/home/"
    const user = process.env.USER
    dir += user + "/"
}
console.log(dir)

fs.readdir(dir)
    .then(files => {
        //console.log(files); json format
        files.forEach(file => {
            console.log(file);
        })
    })
    .catch(err => {
        console.error(err);
    })