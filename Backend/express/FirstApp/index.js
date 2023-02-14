const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/r/:id", (req, res) => {
  const { id } = req.params;
  res.send(id);
});

app.get("/search", (req, res) => {
  const { q, color } = req.query;
  // console.log(req.query);
  res.send(`<h1>These are the query values ${(q, color)}</h1>`);
});

app.get("/cats", (req, res) => {
  res.send("meow");
});

app.get("/dogs", (req, res) => {
  res.send("woof");
});

app.get("*", (req, res) => {
  res.send("Some unkown path");
});

// app.use((req, res) => {
//   console.log("We got a request");
//   res.send({ color: "red" });
// });

app.listen(port, () => {
  console.log(`App listening at ${port}`);
});
