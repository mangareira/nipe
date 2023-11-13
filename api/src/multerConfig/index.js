import multer from "multer"
import path from "path"

export const storage = multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null,  path.resolve("uploads/image"))
    },
    filename: function(req, file, callback) {
        const time = new Date().getTime()

      callback(null, `${time}_${file.originalname}`)
    }
})
export const storageArquivo = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null,  path.resolve("uploads/arquivo"))
  },
  filename: function(req, file, callback) {
      const time = new Date().getTime()

    callback(null, `${time}_${file.originalname}`)
  }
})
