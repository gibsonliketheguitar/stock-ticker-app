const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Home Data");
});

app.get("/stock", (req, res) => {
  console.log(req.body);
  res.send({ data: "stock" });
});

//listen for request on port 3000, and as a callback function have the port listened on logged
const PORT = 8000;
app.listen(PORT, (err) => {
  if (err) console.log("Error in server setup");
  console.log("Server listening on port", PORT);
});
