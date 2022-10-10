// app.js
// Included packages and define server related variables
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password')
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(express.urlencoded({ extended: true }))

//setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)
  console.log(`random password is ${password}`)
  res.render('index', { password: password, options: options })
})

app.listen(port, () => {
  console.log(`The Express server is running on https://localhost:${port}`)
})