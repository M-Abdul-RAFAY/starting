const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname, "public")));

const port = 3000;

app.get("/", (req, res) => {
  res.send("hello, world");
});

app.listen(port, () => {
  console.log("The sever is up and running");
});
