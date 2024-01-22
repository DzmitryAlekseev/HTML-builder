const { stdin, stdout, exit } = process;
const fs = require("fs");
const path = require("path");

(function writeFile(){
    fs.writeFile(
        path.join(__dirname, "project-dist", "bundle.css"),
        "\n",
        (err) => {
            if (err) throw err;
        }
    )
})();

let arr = [];

// function writeInformation(dirname, file.name) {
//     reader = fs.createReadStream(
//         path.join(dirname, file.name),
//     )
    
    
//     reader.on("data", (data) => {
//         let tempData = data.toString();
//         console.log(tempData)
//         fs.appendFile(
//             path.join(__dirname, "project-dist", "bundle.css"),
//             tempData,
//             (err) => {
//                 if (err) throw err;
//             }
//         )
//     })
// }

(function readFilesInFolders(folderPath){
    // folderName = path.resolve(__dirname)
    // folderName = file.name;
   
    fs.readdir(
        folderPath,
        {withFileTypes: true},
        (err, files) => {
        if (err) throw err;
        
        // files.forEach((e)=> console.log(e.name))
        files.forEach(file => {
            // console.log(path.join(file.path,file.name))
            fs.stat(path.join(file.path,file.name), (err, stats) => {
                if (err) {
                  console.error(err)
                  return
                }
            //    console.log(stats.isDirectory())
                if(stats.isDirectory()) {
                    console.log('directory: '+ path.join(file.path,file.name))
                    readFilesInFolders(path.join(file.path,file.name));
                } else if (stats.isFile()){
                    console.log('file: '+ path.join(file.path,file.name))
                    if(path.extname(file.name) === '.css' && file.name !== 'bundle.css') {
                    
                        console.log(file)
                        reader = fs.createReadStream(
                            path.join(file.path,file.name),
                            (err) => {
                                if (err) throw err;
                          }
                            
                        )
                                
                                
                        reader.on("data", (data) => {
                            let tempData = data.toString();
                            // console.log(tempData)
                            fs.appendFile(
                                path.join(__dirname, "project-dist", "bundle.css"),
                                tempData,
                                (err) => {
                                    if (err) throw err;
                                    console.log(path.join(file.path,file.name))
                                }
                            )
                        })
    
                       
                    }
                } //false
            })
            // let temp = file.name;
            // if(file.isDirectory()){
            //     console.log(file.name)
            //     // folderName = file.name;
            //     // return readFilesInFolders(folderName)
            // } else if (file.isFile()) {
                // console.log('here')
                // console.log(file)
                // if(path.extname(file.name) === '.css' && file.name !== 'bundle.css') {
                    
                //     console.log(file)
                //     reader = fs.createReadStream(
                //         path.resolve(file.name),
                //         console.log('reader')
                //     )
                            
                            
                //     reader.on("data", (data) => {
                //         let tempData = data.toString();
                //         console.log(tempData)
                //         fs.appendFile(
                //             path.join(__dirname, "project-dist", "bundle.css"),
                //             tempData,
                //             (err) => {
                //                 if (err) throw err;
                //             }
                //         )
                //     })

                   
                // }
            //}
           
            // if (file.isFile()){
            //     if(path.extname(file.name) === ".css") {
            //         // fs.appendFile(
            //         //     path.join(__dirname, "text.txt"),
            //         //     strData,
            //         //     (err) => {
            //         //         if (err) throw err;
            //         //     }
            //         // )
            //         console.log(file.name)
            //     }
            //     // let fullFileName = file.name;
            //     // let extName = path.extname(file.name);
            //     // let extNameWithoutDot = extName.slice(1, extName.length);    
            //     // let fileNameBeforeDot = fullFileName.slice(0, fullFileName.indexOf('.'));
            //     // fs.stat(
            //     //     path.join(__dirname, "secret-folder", file.name),
            //     //     (err, stats) => {
            //     //         if (err) throw err;
            //     //         let strFinal = fileNameBeforeDot + ' - ' + extNameWithoutDot + ' - ' + stats.size / 1024 + 'kb';
            //     //         stdout.write(strFinal + '\n');
            //     // })
            // } else if(file.isDirectory()) {
            //    console.log(__dirname)
            // }
        });
        // arr.forEach(file => readFilesInFolders(file.name))
        // console.log(arr)
    });
})(__dirname);





// fs.readdir(
//     path.join(__dirname, "files"),
//     {withFileTypes: true},
//     (err, files) => {
//     if (err) throw err;
//     files.forEach(file => {
//         if (file.isFile()){
//             console.log(files)
//             console.log(__dirname)
//             fs.copyFile(
//                 path.join(__dirname, "files", file.name),
//                 path.join(__dirname, "files-copy", file.name),
//                 (err) => {
//                     if (err) throw err;
                   
//                 }
//             )
//         }
//     });
// })



