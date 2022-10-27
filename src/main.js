const express = require("express");

const process = require("process");
const path = require("path");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {

  const data = fs.readFileSync(
    path.join(process.cwd(), "payload.json")
  );

  res.status(200).json(
    JSON.parse(data)
  );
});


app.listen(10111, () => {

  console.log("Server listening on port", 10111);
});