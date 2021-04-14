const express = require('express')
const app = express()
const connect = require('./config/db')

app.use(express.json())

const start = async () => {
    await connect()
    app.listen(5050, () => {
        console.log("listening to port 5050")
    })
}

start()

