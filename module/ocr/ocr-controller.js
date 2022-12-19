const express = require('express');
const ocr = express.Router();
const {ocrEng, ocrUrd} = require('./ocr-service')

ocr.post('/get-ocr-english', ocrEng);
ocr.post('/get-ocr-urdu', ocrUrd);



module.exports = ocr;











// const vision = require('@google-cloud/vision');
// const client = new vision.ImageAnnotatorClient({keyFilename:'./api-key.json'});
// const detectLandmark = async(file_path)=>{
//     const [result] = await client.landmarkDetection('./resources/random-cnic.jpg');
//     // const labels = result.textAnnotations;
//     console.log(result);
// }
// detectLandmark()


//   module.exports.ocr= ((req, res, next)=>{
//     const client = new vision.ImageAnnotatorClient(CONFIG);
//     async function setEndpoint() {
//         // Specifies the location of the api endpoint
//         const clientOptions = {apiEndpoint: CONFIG};
      
//         // Creates a client
//         // Performs text detection on the image file
//         const [result] = await client.textDetection('./resources/CNIC.png');
//         const labels = result.textAnnotations;
//         console.log('Text:');
//         labels.forEach(label => console.log(label.description));
//         console.log(labels)
//       }
//       setEndpoint();
//   })

