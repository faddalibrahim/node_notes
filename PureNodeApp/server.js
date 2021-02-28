const http = require("http");
const { readFile } = require("fs");

const requestListener = function (req, res) {
  let path = "./views/";
  let statusCode = 200;
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    case "/blog":
      path += "blog.html";
      break;
    case "/blogs":
      res.statusCode = 301;
      res.setHeader("Location", "/blog");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
  }

  readFile(path, "utf8", (err, html) => {
    if (err) {
      res.statusCode = 500;
      res.end("oops, something went wrong");
    }

    res.writeHead(res.statusCode, { "Content-Type": "text/html" });
    res.end(html);
  });
};

const server = http.createServer(requestListener);

server.listen(process.env.PORT || 3000, "localhost", () =>
  console.log("server is up")
);
