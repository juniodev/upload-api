const express = require('express')
const file = require('../controllers/file')
const route = express.Router()

route.post('/file/upload', file.uploadFile)
route.get('/file/:file', file.viewFile)

module.exports = route
