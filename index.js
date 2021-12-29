const app = require('./server')
const PORT = 2000

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
