const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Home Data");
});

const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "bv4mnbf48v6qpate9n30"; // Replace this
const finnhubClient = new finnhub.DefaultApi();

app.get("/stock", (req, res) => {
  const { symbol } = req.query;
  let returnObj = {
    symbol,
    timeOfQuery: new Date(),
    currentPrice: "null",
    previousClose: "null",
    percentChange: "null",
  };
  try {
    finnhubClient.quote(symbol, (error, data, response) => {
      if (error) throw new Error(error);
      returnObj.currentPrice = data.c;
      returnObj.previousClose = data.pc;
      returnObj.percentChange = data.dp;
    });
    res.send(returnObj);
  } catch (error) {
    res.status(404).send("Server Failure");
  }
});

//listen for request on port 3000, and as a callback function have the port listened on logged
const PORT = 8000;
app.listen(PORT, (err) => {
  if (err) console.log("Error in server setup");
  console.log("Server listening on port", PORT);
});
