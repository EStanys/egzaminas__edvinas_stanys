const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes') 

dotenv.config()

connectDB()

const app = express()

// Middleware
app.use(cors());
app.use(express.json())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

 // Routes
app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 4000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)