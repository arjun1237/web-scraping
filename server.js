const express = require('express')
const app = express()
const scraperRouter = require('./resources/router/scraper.router')
app.use(express.json())

app.use('/scraper', scraperRouter)
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 5050;

const start = async () => {
    app.listen(PORT, () => {
        console.log(`listening to port ${PORT}`)
    })
}

start()
