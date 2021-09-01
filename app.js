const express = require('express')
const app = express()
const port = 3000

const auth = require('./controllers/Auth')


app.use