const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors');
const connectDB = require('./config/db');
// imetam routa const cardRoutes = require('./routes/cardRoutes') 

dotenv.config()

connectDB()

const app = express()

// Middleware
app.use(cors());
app.use(express.json())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

 
// app.use('/card', cardRoutes)

const PORT = process.env.PORT || 4000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)