require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_CONNECT_URI)

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log(`connected to database`))

app.use(express.json())

const leaderboardsRouter = require('./routes/lb')
app.use('/lb',leaderboardsRouter)

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))