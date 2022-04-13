const express = require("express");
const app = express();
const port = 3000;

const users = [];

users.push({ email: "mikaelvto@gmail.com", password: "abcde" });

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  users.push({
    email: email,
    password: password,
  });
  console.log(users);
  res.redirect("/register");
});

app.get("/salam", (req, res) => {
  const namaDariQuery = req.query.nama || "tidak ada nama";
  res.render("salam", {
    nama: namaDariQuery,
  });
});

app.listen(port, () => {
  console.log("Listening on http://localhost:${port}");
});
