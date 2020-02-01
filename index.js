const express = require("express");
const db = require("./database/database.js");

const Models = require("./models/Models");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`App listening on port ${port}!`));
