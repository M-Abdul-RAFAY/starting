const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid_v4 } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const port = 3000;

let posts = [
  {
    id: uuid_v4(),
    username: "Rafay",
    age: 19,
  },
  {
    id: uuid_v4(),
    username: "Ashan",
    age: 22,
  },
  {
    id: uuid_v4(),
    username: "Haseed",
    age: 18,
  },
  {
    id: uuid_v4(),
    username: "Wasay",
    age: 23,
  },
];

app.get("/post", (req, res) => {
  res.render("index.ejs", { posts });
});

app.post("/posts", (req, res) => {
  let data = ({ username, age } = req.body);
  data.id = uuid_v4();
  posts.push(data);
  res.redirect("/post");
});

app.get("/post/new", (req, res) => {
  res.render("form.ejs");
});

app.get("/post/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((element) => id === element.id);
  res.render("show.ejs", { post });
});

app.patch("/post/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((element) => id === element.id);
  let updateAge = req.body.age;
  post.age = updateAge;
  res.redirect("/post");
});

app.get("/post/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((element) => id === element.id);
  res.render("edit.ejs", { post });
});
app.delete("/post/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((element) => id !== element.id);
  res.redirect("/post");
});

app.listen(port, () => {
  console.log("The sever is up and running");
});
