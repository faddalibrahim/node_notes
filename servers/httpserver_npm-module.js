/**
 * * https://www.npmjs.com/package/http-server
 * 
 * 
 If all you want is a Node.js server to serve HTML and serve static files without you coding anything for the server, Node has a solution for that as well. In this case you need to install the http-server zero-configuration, command-line server to serve your files.

To use http-server, install it with the command npm install http-server -g.

In a fresh directory, create a child directory named public in which we will place static files for http-server to serve. Create a static HTML file inside this public directory named index.html with the following contents:


Then you can run the http-server using the command:
http-server ./public

This Node.js serving option is useful for serving a simple app that does mainly front-end work.
 */
