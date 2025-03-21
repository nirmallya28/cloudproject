const multer = require("multer");
const multerS3 = require("multer-s3");
const { s3 } = require("../config/aws");
require("dotenv").config();

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.S3_BUCKET_NAME,
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, `uploads/${Date.now()}_${file.originalname}`);
    },
  }),
});

module.exports = upload;
