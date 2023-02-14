const express = require("express");
const app = express();
const redditData=require('./data.json')
console.log(redditData)

app.set("view engine", "ejs");
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.send("Hi");
});

app.get('/cats',(req,res)=>{
  let cats=['sunnt','kitty','manchur']
  res.render('cats',{cats})
})

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.get("/random", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { num });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data=redditData[subreddit]
  data ? res.render("subreddit", {...data}) : res.render("notFound", {subreddit}) 
  
});

app.listen(8000, () => {
  console.log("Port at 8000");
});
