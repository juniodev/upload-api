const multer = require('multer')
const { fileName, fileSize } = require('../utils/func')

/*
    fileSize tem por padrão limite de 100MB ou defina um novo valor padrão fileSize(200)
*/

const uploadFile = multer(
  {
    limits: {
      fileSize: fileSize()
    },
    storage: multer.diskStorage({
      destination: 'uploads',
      filename: (req, file, cb) => {
        cb(null, `${fileName(6)}_${file.originalname.replace(/\s/g, '')}`)
      }
    })
  }
)

module.exports = uploadFile
