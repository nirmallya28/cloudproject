const express = require("express");
const { s3, textract } = require("../config/aws");
const upload = require("../middleware/multerConfig");

const router = express.Router();

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const fileUrl = req.file.location;

    // Extract text using AWS Textract
    const params = {
      Document: { S3Object: { Bucket: process.env.S3_BUCKET_NAME, Name: req.file.key } },
      FeatureTypes: ["TABLES", "FORMS"],
    };

    textract.analyzeDocument(params, (err, data) => {
      if (err) return res.status(500).json({ error: err.message });

      // Extract detected text
      const extractedText = data.Blocks
        .filter((block) => block.BlockType === "LINE")
        .map((block) => block.Text)
        .join(" ");

      res.json({ fileUrl, extractedText });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
