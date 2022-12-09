const multer = require('multer')
const multerConfig = require('../multer/multer')
const path = require('path')
const fs = require('fs')

const upload = multer(multerConfig).single('file')

class FileController {

  uploadFile (req, res) {
    return upload(req, res, function (error) {

      if (error) {
        return res.status(400).json(
          {
            sucess: false,
            code: error.code,
            message: 'An error occurred while loading the file'
          }
        )
      }

      const fileName = req.file.filename

      const kbytes = req.file.size / 1024

      return res.status(200).json(
        {
          success: true,
          message: 'Successful upload',
          file_url: `http://${req.hostname}/file/${fileName}`,
          file: {
            name: fileName,
            kbytes: Number(kbytes.toFixed()),
            mime_type: req.file.mimetype
          }
        }
      )

    }
    )
  }

  viewFile (req, res) {

    try {

      const fileName = req.params.file

      const file = path.resolve('uploads', fileName)

      if (!fs.existsSync(file)) {
        res.send('The file does not exist on the server')
      }

      return res.sendFile(file)

    } catch (error) {
      return res.send('We were unable to complete your request')
    }

  }

}

module.exports = new FileController()
