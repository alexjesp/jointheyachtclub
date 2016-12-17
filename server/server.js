const express = require('express')
const compression = require('compression')
const app = express()

app.use(compression())
app.use('/styles', express.static('public', {
  maxAge: 0 // don't cache css
}))
app.use(express.static('public', {
  maxAge: 24 * 60 * 60 * 1000 // 1 day
}))

module.exports = app
