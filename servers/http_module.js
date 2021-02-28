/**
 * * https://www.codewithc.com/difference-readfile-createreadstream-node-js/
 * * https://www.quora.com/What-is-the-difference-between-fs-readFile-and-fs-createReadStream-in-Node
 * * https://www.bestinterviewquestion.com/question/what-is-the-difference-between-readfile-vs-createreadstream-in-node-js-s1laz5940yg
 * * https://www.freecodecamp.org/news/learn-node-js-with-brigadier-fluffykins-part-iii-request-object-configure-routes-serve-files-7666f783dc10/#:~:text=The%20difference%20between%20setHeader%20and%20writeHead%20is%20that%20setHeader%20sets,before%20you%20send%20the%20response.
 */

const { readFile, readFileSync, createReadStream } = require("fs");

const http = require("http");

const requestListener = function (req, res) {
  readFile("../index.html", "utf8", (err, html) => {
    if (err) {
      // res.status(500).send("sorry, out of order");
      res.statusCode = 500;
      res.end("oops, something went wrong");
    }

    res.writeHead(200, { "Content-Type": "text/html", test: "it works" });
    res.end(html);
    //res.end(data);  === res.write(data); res.end()
    // res.writeHead(status-code, {...objects}) === setHeader(key,value), setHeader(key,value) without status code
  });

  // createReadStream("../index.html").pipe(res);
};

const server = http.createServer(requestListener);

// Start the server on port 3000
server.listen(process.env.PORT || 3000, "localhost", () =>
  console.log("server is up")
);
