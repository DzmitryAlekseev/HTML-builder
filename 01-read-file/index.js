const fs = require("fs");
const path = require("path");
const { stdin, stdout} = process;

reader = fs.createReadStream(
    path.join(__dirname, "text.txt"),
)

reader.on("data", (data) => {
    stdout.write(data.toString())
})
