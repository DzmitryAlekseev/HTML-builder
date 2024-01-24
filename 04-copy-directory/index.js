const fs = require("fs");
const path = require("path");

fs.readdir(
    path.join(__dirname, "files"),
    (err) => {
        if (err) throw err;
        fs.stat(
            path.join(__dirname, "files"),
            (err, stats) => {
                if (err) throw err;
                if (stats.isDirectory()) {
                    fs.stat(
                        path.join(__dirname, "files-copy"),
                        function(err) {
                        if (!err) {
                            console.log('Директория есть');
                            fs.rm(
                                path.join(__dirname, "files-copy"),
                                {recursive: true, force: true},
                                (err) => {
                                    if (err) throw err;
                                    fs.mkdir(
                                        path.join(__dirname, "files-copy"),
                                        {recursive: true, force: true},
                                        (err) => {
                                            if (err) throw err;
                                        }
                                    )

                                    fs.readdir(
                                        path.join(__dirname, "files"),
                                        { withFileTypes: true },
                                        (err, files) => {
                                            if (err) throw err;                                    
                                            files.forEach((file) => {
                                                fs.copyFile(
                                                    path.join(__dirname, "files", file.name),
                                                    path.join(__dirname, "files-copy", file.name),
                                                    (err) => {
                                                        if (err) throw err;
                                                    }
                                                );
                                            })
                                        }
                                    )  
                                }
                            )
                        } else if (err.code === 'ENOENT') {
                            console.log('директории нет');
                            fs.mkdir(
                                path.join(__dirname, "files-copy"),
                                {recursive: true, force: true},
                                (err) => {
                                    if (err) throw err;
                                }
                            )
                        }
                    });
                   
                    
                    fs.readdir(
                        path.join(__dirname, "files"),
                        { withFileTypes: true },
                        (err, files) => {
                            if (err) throw err;
                            files.forEach((file) => {
                                console.log(file.name)
                                fs.copyFile(
                                    path.join(__dirname, "files", file.name),
                                    path.join(__dirname, "files-copy", file.name),
                                    (err) => {
                                        if (err) throw err;
                                    }
                                );
                            })
                        }
                    )
                }
            }
            
        )
    }
)
