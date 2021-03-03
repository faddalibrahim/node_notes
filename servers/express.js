const express = require("express");
const morgan = require("morgan");

const app = express();

app.set("view engine", "ejs");

app.listen(3000);

//middleware and static files
app.use(express.static("css"));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  //   res.sendFile("./public/index.html", { root: __dirname });
  //   console.log(__dirname);
  res.render("index", {
    blogs: [
      { title: "Becoming", content: "Yeah this is some fucking content" },
      { title: "Confusion", content: "Yeah this is some fucking content" },
      { title: "Promotion", content: "Yeah this is some fucking content" },
      { title: "Salamander", content: "Yeah this is some fucking content" },
      { title: "Becoming", content: "Yeah this is some fucking content" },
    ],
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/about-me", (req, res) => {
  res.render("about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

app.use((req, res) => {
  // res.status(404).sendFile("./public/404.html", { root: __dirname });
  res.status(404).render("404");
});
