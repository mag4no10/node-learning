// can be improven by mapping all files with getData function (parallel programming)

const fs = require("node:fs/promises")
const process = require("node:process")
const pc = require('picocolors')



let dir = process.argv.at(2) ?? "."

async function isDirectory(dir) {
    try {
        var files = await fs.readdir(dir, "utf-8")
    } catch (err) {
        return false
    }
    return files
}

async function getData(FF) {
    try {
        var stats = await fs.stat(FF)
    }
    catch (err) {
        console.error("Error reading file: ", FF)
        return String("")
    }
    const is_dir = stats.isDirectory() ? "d" : " " 
    const owner = stats.uid
    const group = stats.gid
    let size = stats.size
    let counter = 0
    while (size >= 1024) {
        size /= 1024
        counter++
    }
    size = size.toFixed(0)
    size = parseInt(size)
    let new_size = ""
    if (0 <= size && size <= 99) {
        new_size = "  "
    }
    else if (100 <= size && size <= 999) {
        new_size = " "
    }
    switch (counter) {
        case 0:
            new_size += "B "
            break
        case 1:
            new_size += " KB"
            break
        case 2:
            new_size += " MB"
            break
        case 3:
            new_size += " GB"
            break;
        case 4:
            new_size += " TB"
            break
        default:
            console.error("Wrong size: ", size)
    }
    const birth = stats.birthtime.toDateString()
    const data = is_dir + "  " + owner + "  " + group + "  " + size + new_size + "  " + birth
    return data
}

(
    async (dir) => {
        const files = await isDirectory(dir)
        if (typeof(files) == "boolean" && !files) {
            console.log(`ls: ${dir}: No such file or directory.`)
            process.exit(1)
        }
        let dict_d = [], dict_f = []
        for (const ff of files) {
            const data = await getData(ff)
            if (data.at(0) == "d") { 
                dict_d.push(ff)
                dict_d.push(data)
            }
            else {
                dict_f.push(ff)
                dict_f.push(data)
            }
        }
        for (let it = 0; it < dict_d.length; it += 2) {
            console.log(
                dict_d[it+1] + "\t"  + pc.green(dict_d[it])
            )
        }
        for (let it = 0; it < dict_f.length; it += 2) {
            console.log(
                dict_f[it+1] + "\t"  + pc.blue(dict_f[it])
            )
        }
    }
)(dir)
