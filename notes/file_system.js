// const { readFile, readFileSync } = require("fs");

// synchronous file reading
// const txt = readFileSync("./hello.txt", "utf8");
// console.log(txt);

//asynchronous file reading
// readFile("./hello.txt", "utf8", (err, data) => {
//   console.log(data);
// });
// console.log("hmmmm");

//promised based file reading
const { readFile } = require("fs").promises;

async function spitTxt() {
  const file = await readFile("./hello.txt", "utf8");
  console.log(file);
}

spitTxt();
console.log("I should come first");
