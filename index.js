const express = require("express");
const db = require("./database/database.js");

const Models = require("./models/Models");
const pointRouter = require("./routes/pointRouter");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", pointRouter);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`App listening on port ${port}!`));
