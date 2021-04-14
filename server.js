const express = require('express')
const app = express()
const scraperRouter = require('./resources/router/scraper.router')
const PORT = process.env.PORT || 5050
app.use(express.json())

app.use('/scraper', scraperRouter)

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});