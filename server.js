const path = require("path");
const fs = require("fs");

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>The Loading page</h1>");
  }
  if (req.url === "/first") {
    fs.readFile(
      path.join(__dirname, "/pages", "first.html"),
      "utf8",
      (error, data) => {
        if (error) throw error;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    );
  }
  if (req.url === "/second") {
    fs.readFile(
      path.join(__dirname, "/pages", "second.html"),
      "utf8",
      (error, data) => {
        if (error) throw error;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    );
  }
});

const port = process.env.port || 3001;
server.listen(port, () => {
  console.log(`Server is Running port ${port}`);
});
