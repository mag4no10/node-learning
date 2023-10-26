const fs = require("node:fs/promises")
const process = require("node:process")



let dir = process.argv.at(2)
is_home = false
if (dir == null || dir == undefined) {
    dir = "/home/"
    const user = process.env.USER
    dir += user + "/"
    is_home = true
}

async function isDirectory(dir) {
    try {
        var files = await fs.readdir(dir, "utf-8")
    } catch (err) {
        return false
    }
    return files
}

async function getData(FF) {
    let data
    fs.stat(FF)
    const size = stats.size
    if (size < 1024) //TODO pasar a bytes / kb / megas / gb / 
    //TODO rellenar data con stats
    return data
}



(
    async (dir) => {
        const files = await isDirectory(dir)
        if (typeof(files) == "boolean" && !files) {
            console.log(`ls: ${dir}: No such file or directory.`)
            process.exit(1)
        }
        for (const ff of files) {
            const data = await getData(ff)
            //TODO guardar en un array key value para poder imprimir primero los directorios
            console.log(ff + "     " + data)
        }
    }
)(dir)