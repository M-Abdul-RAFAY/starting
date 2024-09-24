const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const port = 3000;

let posts = [
  {
    username: "Rafay",
    age: 19,
  },
  {
    username: "Ashan",
    age: 22,
  },
  {
    username: "Haseed",
    age: 18,
  },
  {
    username: "Wasay",
    age: 23,
  },
];

app.get("/post", (req, res) => {
  res.render("index.ejs", { posts });
});

app.listen(port, () => {
  console.log("The sever is up and running");
});
