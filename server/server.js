const express = require('express')
const app = express()

app.use(express.static('public', {
  maxAge: 24 * 60 * 60 * 1000 // 1 day
}))

module.exports = app
