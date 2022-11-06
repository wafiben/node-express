const fs = require("fs");
fs.readFile("./text.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
//this operation is synchrone because it does not have a callback function
//will be displayed before the previous one
const text = fs.readFileSync("./text.txt", "utf-8");
console.log("ssssssssss", text);
//
