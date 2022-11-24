const uploader = require('../../utilities/singleUpload')

function fileUploader (req, res, next) {
  const upload = uploader('uploads',
    ['image/jpeg', 'image/jpg', 'image/png'],
    1000000,
    'Only .jpg, jpeg or .png format allowed!'
  )

  upload.any()(req, res, (err) => {
    if (err) {
      next(err)
    } else {
      next()
    }
  })
}
module.exports = fileUploader
