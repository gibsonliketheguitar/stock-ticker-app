const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "bv4mnbf48v6qpate9n30"; // Replace this
const finnhubClient = new finnhub.DefaultApi();

app.get("/stock", (req, res) => {
  const { symbol } = req.query;
  try {
    finnhubClient.quote(symbol, (error, data, response) => {
      if (error) throw new Error(error);
      else if (data.o === 0 && data.h === 0 && data.l === 0)
        res.status(400).send("Bad Request");
      else {
        res.send({
          symbol,
          timeOfQuery: new Date(),
          currentPrice: data.c,
          previousClose: data.pc,
          percentChange: data.dp,
        });
      }
    });
  } catch (error) {
    res.status(404).send("Server Failure");
  }
});

const PORT = 8000;

//listen for request on port 8000, and as a callback function have the port listened on logged
app.listen(PORT, (err) => {
  if (err) console.log("Error in server setup");
  console.log("Server listening on port", PORT);
});
