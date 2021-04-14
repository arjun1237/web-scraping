const express = require('express')
const app = express()
const scraperRouter = require('./resources/router/scraper.router')

app.use(express.json())

const start = async () => {
    app.listen(5050, () => {
        console.log("listening to port 5050")
    })
}

start()

app.use('/scraper', scraperRouter)