const tesseract = require("node-tesseract-ocr")



module.exports.ocrEng = async(req, res, next)=>{

  // console.log(req.body)
  let base64 = req.body.image;
  image = base64.substring(0, (base64.indexOf(",")+1));
  base64 = base64.replace(image, "");
  let buffer = Buffer.from(base64, 'base64');
  const config = {
    lang: "eng",
    oem: 1,
    psm: 3,
  }

  await tesseract
  .recognize(buffer, config)
  .then((text) => {
    res.json({text: text})
    console.log("Result:", text)
  })
  .catch((error) => {
    console.log(error.message)
  })
  
}
 
module.exports.ocrUrd = async(req, res, next)=>{
  let base64 = req.body.image;
  image = base64.substring(0, (base64.indexOf(",")+1));
  base64 = base64.replace(image, "");
  let buffer = Buffer.from(base64, 'base64');

  const config = {
    lang: "urd",
    oem: 1,
    psm: 3,
  }

  await tesseract
  .recognize("./resources/sw.jpg", config)
  .then((text) => {
    res.json({text: text})
    console.log("Result:", text)
  })
  .catch((error) => {
    console.log(error.message)
  })
}

module.export = tesseract;