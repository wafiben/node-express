const { product, sum } = require("./localModule.js");

sum(5, 6);
product(5, 6);

const http = require("http");
const server = http.createServer((req, res) => {
  /*   res.end("<h1>hello thi th response of the server displayed on browser</h1>"); */ console.log(
    "server is build"
  );
});
const port = 5000;
server.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`server is running and waiting for orders on port ${port}`);
});
console.log("sghdshgfdhgfs");
console.log("welcome yosra");
