const Scraper = require('../model/scrapper.model')
const request = require('request')
const cheerio = require('cheerio')

const scrapeData = async (req, res) => {
    let { url } = req.body
    if(url === undefined){
        return res.status(400).json({error: true, message: "url in request body not defined."})
    }
    request(url, (err, response, html) => {
        if(!err && response.statusCode === 200){
            const $ = cheerio.load(html)

            const title = $('title').text()
            let image = $('img').attr('src')
            let content = $("meta[name='description']")[0].attribs.content
            let site_name = $("meta[property='og:site_name']")[0].attribs.content
            let icons = []

            $("link").each(function (index, element) {
                let rel = $(element).attr('rel')
                if(rel.includes('icon')){
                    icons.push($(element).attr('href'))
                }
            });
            let icon = icons[0]

            let data = {
                site_name,
                icon,
                title, 
                content,
                image
            }

            res.json({error: false, data})
        }
        else{
            res.status(400).json({error: true, message: err.message})
        }
    })
}

module.exports = {
    scrapeData
}