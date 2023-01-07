const express = require("express");
const app = express();

const mysql = require("mysql");
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "passwordmanager",
});



const PORT = 3001;

app.get("/", (req, res) => {
  res.send("I am sending data from server");
});

app.listen(PORT, () => {
  console.log("Server is Running");
});
