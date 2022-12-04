const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "bv4mnbf48v6qpate9n30"; // Replace this
const finnhubClient = new finnhub.DefaultApi();

function getQuote(symbol) {
  return new Promise((resolve, reject) => {
    finnhubClient.quote(symbol, (error, data, response) => {
      if (error) reject(error);
      else if (data.o === 0 && data.h === 0 && data.l === 0)
        reject("Invalid Symbol");
      else {
        resolve({
          currentPrice: data.c,
          previousClose: data.pc,
          percentChange: data.dp,
        });
      }
    });
  });
}

function getProfile(symbol) {
  return new Promise((resolve, reject) => {
    finnhubClient.companyProfile2({ symbol }, (error, data, response) => {
      if (error) reject(error);
      else {
        resolve({
          name: data.name,
          logo: data.logo,
          weburl: data.weburl,
          industry: data.finnhubIndustry,
        });
      }
    });
  });
}

app.get("/stock", async (req, res) => {
  const { symbol } = req.query;
  try {
    const profile = await getProfile(symbol);
    const prices = await getQuote(symbol);

    console.log(profile, prices);
    res.status(200).send({
      symbol,
      timeOfQuery: new Date(),
      ...profile,
      ...prices,
    });
  } catch (error) {
    res.status(404).send("Server Failure", error);
  }
});

const PORT = 8000;

//listen for request on port 8000, and as a callback function have the port listened on logged
app.listen(PORT, (err) => {
  if (err) console.log("Error in server setup");
  console.log("Server listening on port", PORT);
});
