const { stdin, stdout, exit } = process;
const fs = require("fs");
const path = require("path");

(function copyDir() {
  fs.mkdir(
    path.join(__dirname, "files-copy"),
    (err) => {
        if (err) throw err;
    }
  )

reader = fs.createReadStream(
    path.join(__dirname, "files"),
)
reader.on("data", (err, data) => {
    if(err) throw err
    stdout.write(data.toString())
})

fs.readdir(
    path.join(__dirname, "files"),
    {withFileTypes: true},
    (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        if (file.isFile()){
            console.log(files)
            console.log(__dirname)
            fs.copyFile(
                path.join(__dirname, "files", file.name),
                path.join(__dirname, "files-copy", file.name),
                (err) => {
                    if (err) throw err;
                   
                }
            )
        }
    });
})

}())

