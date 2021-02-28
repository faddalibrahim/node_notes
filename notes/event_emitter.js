const x = 0;

const { EventEmitter } = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("zerofound", () => console.log("zero has been detected"));

if (x === 0) eventEmitter.emit("zerofound");
