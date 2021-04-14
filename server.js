const express = require('express')
const app = express()
const scraperRouter = require('./resources/router/scraper.router')
const dotenv = require("dotenv");

app.use(express.json())

dotenv.config();

const PORT = process.env.PORT || 5050;

const start = async () => {
    app.listen(PORT, () => {
        console.log(`listening to port ${PORT}`)
    })
}

start()

app.use('/scraper', scraperRouter)