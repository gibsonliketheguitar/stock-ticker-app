# Live Link

https://stock-ticker-27dyhwn8v-gibsonliketheguitar.vercel.app/

## How to Build and run locally

cd into specific respective root directory and run following command

### Client

Special Instructions create and .env.local and add the following attributes

```
NEXT_PUBLIC_DEV_SERVER=http://localhost:8000
NEXT_PUBLIC_PROD_SERVER=<replace deployed server URL>
```

```
    yarn dev
```

### Server

```
    yarn start
```

## Time Estimate

- the recruiter said that this was going to take 2 to 3 hours, but I knew it would take 2 to 3x because of my gap in knowledge of docker and deploying a node server and it has been a while since I worked with node. It was a good refresher. Original time estimation was 8 to 12 hours

| Task                                                                     | Time Estimation | Actual  |
| ------------------------------------------------------------------------ | --------------- | ------- |
| requirement decomposition, planning, and setup of development enviorment | 90 min          | 60 min  |
| dummy seach button and input field                                       | 60 min          | 30 min  |
| recoil setup                                                             | 60 min          | 30 min  |
| setup node server and end point                                          | 60 to 120 min   | 30 min  |
| query actual endpoint                                                    | 60 to 120       | 120 min |
| styling                                                                  | 60 min          | 120 min |
| deployment                                                               | 60 min          | 180 min |

## Things I did not do

- I did not add test because i've gone over the my allocated time and will save testing for my personal application
- Dockerization of application because lack of knowledge and saving it for personal project
- Use any for a few types

## Interesting Things I learned

- Deploying a nodejs server to railway
- Working with Finnhub API and creating custom promise to get company and quotePrices data. Rand into an issue where express server was returning obj without those data.
- I need to start looking into creating a template file to reduce setup of full stack application and also aggregating common common components I have build
- Have an idea, make a draft, or type of data you want returning from your endpoint. It saves time and we can avoid plug and chung

## Closing Thoughts

- getting faster and creating simple application. The goal is to be able to smash these assignment in 120 minutes but that requires having templates of full stack application, with example test, having a cheat sheet of common patter, thinking more before we implement, and having a library of prebuilt components
- Need to work on flexbox https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/

## Requirements for Assignment

```
Create a simple web based React application that takes a stock ticker symbol as input, and
displays the stock’s latest quote price. The app should query your own NodeJS server using
your own REST API. Within your NodeJS server, you will query a public stock API to retrieve
the stock quote data.
Recommendations:
● This should take around 2~3 hours to complete. You can use ChakuraUI
● Feel free to use ‘create-react-app’ to spin up your app.
● We recommend using the https://finnhub.io/docs/api#introduction REST API
for retrieving stock price data
○ This API requires an authentication token for an existing account. We have
created an account that you can use. Here is the token linked to said
account that you will need to use when performing REST requests:
bv4mnbf48v6qpate9n30

Requirements:

● Provide an input field that accepts a stock ticker symbol (e.g AAPL,
TSLA, AMZN)
● Provide a button or alternative way to submit the input.
● When submitted, the web app will query your own NodeJS REST endpoint for
the provided stock’s price data.
● Your NodeJS endpoint should then query the finnhub (or similar) public API
to retrieve the stock’s latest quote.
● Within the web app, display the current price for the stock
● The App state should be managed using either redux and recoil.
● Use typescript instead of JS
● Dockerize the whole application

Bonus:

● add tests for your code
● display the time for the current price
● display the percentage change of the current price from the previous closing
price
● Make it easy for someone (us!) to run your application

Please be ready to review your code with the team.
Please commit your code soon after you created a project to github and commit final, so we can
track the hours that you spent to accomplish this.
And publish it whatever you like such as vercel, heroku, etc
```
