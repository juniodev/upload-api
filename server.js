const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
require('dotenv').config()

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(helmet())
app.use(cors())

app.listen(process.env.PORT || 3333, () => {
    console.log(`Server listening on port ${process.env.PORT || 3333}`);
})
