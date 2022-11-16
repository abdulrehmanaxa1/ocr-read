const tesseract = require("node-tesseract-ocr")

const config = {
  lang: "urd",
  oem: 1,
  psm: 3,
}

tesseract
  .recognize("./resources/cnic_3.jpg", config)
  .then((text) => {
    console.log("Result:", text)
  })
  .catch((error) => {
    console.log(error.message)
  }) 