const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello Worl ssdsd!')
})

app.listen(port, () => {
  console.log(`NodeJs listening at http://localhost:${port}`)
})