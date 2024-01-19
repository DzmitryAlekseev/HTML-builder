const {stdin, stdout, exit} = process;
const greeting = "Hello!\nWrite your best qualities, than press CTR + C or write exit\n";
const fs = require("fs");
const path = require("path");
let tempData = '';
let strData = tempData.toString();

stdout.write(greeting);
fs.writeFile(
    path.join(__dirname, "text.txt"),
    "Your best qualities:\n",
    (err) => {
        if (err) throw err;
    }
)

stdin.on("data", data => {
    tempData = Buffer.from(data, "utf-8")
    let strData = tempData.toString();
    if(strData.trim() === 'exit'){
        exit();
    }
   
    fs.appendFile(
        path.join(__dirname, "text.txt"),
        strData,
        (err) => {
            if (err) throw err;
        }
    )
})

function readTextInFile(){
    fs.readFile(
        path.join(__dirname, 'text.txt'),
        (err) => {
            if (err) throw err;
            stdout.write("Good luck!");
            exit();
        }
    )
}
process.on("exit", () => stdout.write("Good luck!"));
process.on('SIGINT', readTextInFile);



// stdout.write(tempData)




