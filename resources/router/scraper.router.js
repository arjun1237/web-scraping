const scraperRouter = require('express').Router()
const { scrapeData } = require('../controller/scraper.controller')

scraperRouter.post('/', scrapeData)

module.exports = scraperRouter