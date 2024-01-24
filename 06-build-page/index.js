const { stdin, stdout, exit } = process;
const fs = require("fs");
const path = require("path");

(function createFolderDist(){
fs.mkdir(
    path.join(__dirname, "project-dist"),
    (err) => {
        if (err) throw err;
    }
)
})();


function copyFile(data){
    fs.appendFile(
        path.join(__dirname, "project-dist", "index.html"),
        data,
        (err) => {
            if (err) throw err;
        }
    )
}


(function createIndexPageWithReplace(){
    fs.writeFile(
        path.join(__dirname, "project-dist", "index.html"),
        "\n",
        (err) => {
            if (err) throw err;
        }
    )

    readerTemplate = fs.createReadStream (
        path.join(__dirname, "template.html"),
        (err) => {
            if (err) throw err;
        }
    )
    readerTemplate.on("data", (data) => {
    let tempData = data.toString();
    

    copyFile(tempData);
    

    readerIndex = fs.createReadStream (
        path.join(__dirname,"project-dist", "index.html"),
        (err) => {
            if (err) throw err;
        }
    )
    readerIndex.on("data", (data) => {
        let indexData = data.toString();
    

        readerHeader = fs.createReadStream (
            path.join(__dirname, "components", "header.html"),
            (err) => {
                if (err) throw err;
            }
        )
        readerHeader.on("data", (data) => {
            let headerData = data.toString();
            console.log(indexData);
            let curHeader = "{{header}}"
            indexData.replace(/{{header}}/g, headerData)

        })
    })

})





   

    
 

    


})()

// (function writeFile(){
//     fs.writeFile(
//         path.join(__dirname, "project-dist", "bundle.css"),
//         "\n",
//         (err) => {
//             if (err) throw err;
//         }
//     )
// })();

// (function readFilesInFolders(folderPath){
   
//     fs.readdir(
//         folderPath,
//         {withFileTypes: true},
//         (err, files) => {
//         if (err) throw err;
        
//         files.forEach(file => {
//             fs.stat(path.join(file.path,file.name), (err, stats) => {
//                 if (err) {
                  
//                   return err
//                 }

//                 if(stats.isDirectory()) {
//                     readFilesInFolders(path.join(file.path,file.name));
//                 } else if (stats.isFile()){
//                     if(path.extname(file.name) === '.css' && file.name !== 'bundle.css') {
                    
//                         reader = fs.createReadStream(
//                             path.join(file.path,file.name),
//                             (err) => {
//                                 if (err) throw err;
//                           }
//                         )

//                         reader.on("data", (data) => {
//                             let tempData = data.toString();
//                             // console.log(tempData)
//                             fs.appendFile(
//                                 path.join(__dirname, "project-dist", "bundle.css"),
//                                 tempData,
//                                 (err) => {
//                                     if (err) throw err;
//                                     console.log(path.join(file.path,file.name))
//                                 }
//                             )
//                         })
    
                       
//                     }
//                 } 
//             })          
//         });
//     });
// })(__dirname);



