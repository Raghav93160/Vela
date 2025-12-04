const express = require('express')
const app = express()
const port = 5000
const userRoutes = require('./Routes/userRoutes')
const dotenv = require('dotenv')
dotenv.config()
require('./db')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api/users', userRoutes)
 
app.get('/', (req, res) => res.json('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))