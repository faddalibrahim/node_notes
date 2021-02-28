const fs = require("fs");

//reading files
fs.readFile("./hello.txt", (err, data) => {
  err ? console.log(err) : console.log(data.toString());
});

// writing files
fs.writeFile("./mood.txt", "this is the text we are writing", () => {
  console.log("file was written successfully");
});

// directories
if (!fs.existsSync("./sampledir")) {
  fs.mkdir("./sampledir", (err) => {
    err ? console.log(err) : console.log("folder created");
  });
} else {
  fs.rmdir("./sampledir", (err) => {
    err ? console.log(err) : console.log("folder deleted");
  });
}

// deleting files
if (existsSync("./boom.txt")) {
  fs.unlink("./docs/boom.txt", (err) => {
    err ? console.log(err) : console.log("file deleted");
  });
}
