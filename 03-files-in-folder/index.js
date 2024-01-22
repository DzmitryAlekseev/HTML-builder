const { stdout } = process;
const fs = require("fs");
const path = require("path");

fs.readdir(
    path.join(__dirname, "secret-folder"),
    {withFileTypes: true},
    (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        if (file.isFile()){
            let fullFileName = file.name;
            let extName = path.extname(file.name);
            let extNameWithoutDot = extName.slice(1, extName.length);    
            let fileNameBeforeDot = fullFileName.slice(0, fullFileName.indexOf('.'));
            fs.stat(
                path.join(__dirname, "secret-folder", file.name),
                (err, stats) => {
                    if (err) throw err;
                    let strFinal = fileNameBeforeDot + ' - ' + extNameWithoutDot + ' - ' + stats.size / 1024 + 'kb';
                    stdout.write(strFinal + '\n');
            })
        }
    });
})
