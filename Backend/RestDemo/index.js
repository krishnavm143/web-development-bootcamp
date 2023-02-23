const express = require("express");
const app = express();
const path = require("path");
var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

let comments = [
  {
    // id: uuid(),
    username: "Todd",
    comment: "lol that is so funny!",
  },
  {
    // id: uuid(),
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },
  {
    // id: uuid(),
    username: "Sk8erBoi",
    comment: "Plz delete your account, Todd",
  },
  {
    // id: uuid(),
    username: "onlysayswoof",
    comment: "woof woof woof",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.redirect("/comments");
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.get("/tacos", (req, res) => {
  res.json(req.body);
});

app.post("/tacos", (req, res) => {
  //   res.send("Get tacos");
  const { veg, qty } = req.body;
  res.send(`OK ${veg} ${qty}`);
  console.log(req.body);
});

app.listen(9000, () => {
  console.log("App listening at 9000");
});
