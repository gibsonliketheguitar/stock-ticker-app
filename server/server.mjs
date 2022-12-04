import express from "express";
const app = express();

import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import finnhub from "finnhub";

app.use(compression()); // Compress all routes
app.use(cors());
app.use(helmet());

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

app.get("/", (req, res) => {
  res.send({ data: "helloWorld" });
});

app.get("/stock", async (req, res) => {
  const { symbol } = req.query;
  try {
    const profile = await getProfile(symbol);
    const prices = await getQuote(symbol);

    res.status(200).send({
      symbol,
      timeOfQuery: new Date(),
      ...profile,
      ...prices,
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

const PORT = 8000;
//listen for request on port 8000, and as a callback function have the port listened on logged

if (process.env.NODE_ENV === "development") {
  app.listen(PORT, (err) => {
    if (err) console.log("Trouble with development server");
    console.log("HTTP Server listening on port", PORT);
  });
} else {
  app.listen(process.env.PORT || 3001, (err) => {
    if (err) console.log("Trouble with production server");
    console.log("HTTPS Server listening on port", process.env.PORT || 3001);
  });
}
