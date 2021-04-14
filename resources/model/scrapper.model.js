const mongoose = require('mongoose')

const scraperSchema = new mongoose.Schema(
    {
        site: {
            type: String,
            required: true
        },
        logo: {
            type: String
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        image_url: {
            type: String
        }
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('scraper', scraperSchema)