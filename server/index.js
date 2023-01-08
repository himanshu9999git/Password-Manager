const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const PORT = 3001;

const mysql = require("mysql");
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "passwordmanager",
});

app.post("/addPassword", (req, res) => {
  const { title, password } = req.body;

  db.query(
    "INSERT INTO passwords (title, password) VALUES (?,?)",
    [title, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Successfully Entered");
      }
    }
  );
});

app.get("/", (req, res) => {
  res.send("I am sending data from server");
});

app.listen(PORT, () => {
  console.log("Server is Running");
});
