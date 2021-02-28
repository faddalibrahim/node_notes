const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("./hello.txt", { encoding: "utf-8" });
const writeStream = createWriteStream("./copy.txt");

// readStream.on("data", (chunk) => {
//   console.log("------ NEW CHUNK ------");
//   console.log(chunk);

//   writeStream.write("\n NEW CHUNK \n");
//   writeStream.write(chunk);
// });

// piping

readStream.pipe(writeStream);
