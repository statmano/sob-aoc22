// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
var fs = require("fs");

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// Convert datafiles into usable arrays
app.get("/textconvert", (request, response) => {
  //var dataFile = require(request.query.dayFile);
  //var text = dataFile.daySevenTest.toString('utf-8')
  var text = fs.readFileSync(request.query.dayFile).toString("utf-8");
  var textByLine = text.split("\n");
  /*for (var i = 0; i < textByLine.length; i++) {
    var numberSplit = textByLine[i].split(",");
  }
  let numArr = numberSplit.map((i) => Number(i));
  console.log(textByLine);*/
  response.send(textByLine);
  //response.send(sm);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
