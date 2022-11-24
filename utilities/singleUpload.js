const multer = require('multer')
const path = require('path')

function uploader (filePath,
  allowed_file_types,
  max_file_size,
  error_msg
) {
  // file upload folder
  const UPLOADS_FOLDER = `${__dirname}/../public/data/${filePath}/`

  // storage
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, UPLOADS_FOLDER)
    },
    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname)
      const fileName = file.originalname.replace(fileExt, '')
        .toLowerCase()
        .split(' ')
        .join('_') + '_' + Date.now()
      cb(null, fileName + fileExt)
    }
  })

  // final multer upload obj
  const upload = multer({
    storage,
    limits: {
      fileSize: max_file_size
    },
    fileFilter: (req, file, cb) => {
      if (allowed_file_types.includes(file.mimetype)) {
        cb(null, true)
      } else {
        cb(error_msg)
      }
    }
  })

  return upload
}
module.exports = uploader
