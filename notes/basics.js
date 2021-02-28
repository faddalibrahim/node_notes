// process.on("exit", function () {
//   console.log("what the fuck");
// });

// console.log(__dirname);
// console.log(__filename);
// console.log(process.platform);

const os = require("os");
console.log(os.homedir(), os.platform());
