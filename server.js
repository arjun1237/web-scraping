const express = require('express')
const app = express()
const scraperRouter = require('./resources/router/scraper.router')

app.use(express.json())

app.use('/scraper', scraperRouter)

app.listen(5050, () => {
  console.log("listening to port 5050");
});