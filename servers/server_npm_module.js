/**
 * * https://www.npmjs.com/package/server
 *
 * ! small to medium projects
 * ! API design
 * ! Real time with websockets
 */

const server = require("server");

const { get, post } = server.router;

// Launch server
server({ port: 3000 }, [get("/", (ctx) => "Hello world!")]);
