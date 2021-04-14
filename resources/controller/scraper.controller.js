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

            const title = $("meta[property='og:title']")[0].attribs.content
            const image = $("meta[property='og:image']")[0].attribs.content
            const description = $("meta[property='og:description']")[0].attribs.content
            const site_name = $("meta[property='og:site_name']")[0].attribs.content
            const type = $("meta[property='og:type']")[0].attribs.content
            const url_name = $("meta[property='og:url']")[0].attribs.content
            const icons = []

            $("link").each(function (index, element) {
                let rel = $(element).attr('rel')
                if(rel.includes('icon')){
                    icons.push($(element).attr('href'))
                }
            });
            let icon = icons[0]

            const data = {
                site_name,
                icon,
                title, 
                description,
                image,
                type,
                url: url_name
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