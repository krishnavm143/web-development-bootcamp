const express = require("express");
const app = express();
var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.get("/tacos", (req, res) => {
  res.json(req.body);
});

app.post("/tacos", (req, res) => {
  //   res.send("Get tacos");
  res.json(req.body);
  console.log(req.body);
});

app.listen(9000, () => {
  console.log("App listening at 9000");
});
