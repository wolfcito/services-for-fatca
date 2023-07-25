const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')
const express = require('express')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 3000
const mongoDB = process.env.MONGODB_URI

const v1Router = require('./v1/routes/student.routes')

mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('🔥 BD is on fire'))
  .catch((err) => console.error('Error conexión Mongo', err))

app.use(morgan('dev'))
app.use(bodyParser.json()) // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
)

app.use('/api/v1/services', v1Router)

app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`)
})
