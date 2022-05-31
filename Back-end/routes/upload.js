const router = require('express').Router()
const uploadImage = require('../middleware/uploadImage')
const uploadCtrl = require('../controllers/uploadCtrl')
const auth = require('../middleware/auth')

router.post('/upload_avatar' , uploadImage , auth ,  uploadCtrl.uploadAvatar )

module.exports = router

// const { Router } = require("express");
// const router = Router();
// const multer = require("multer");
// const cloudinary = require("cloudinary");
// const fs = require("fs");
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_API_SECRET,
// });

// const storage = multer.diskStorage({});
// let upload = multer({
//     storage
// })

// router.post("/upload_avatar",upload.single("myFile"), uploadImage  , auth ,async(req,res)=>{
//     try {
//         if (!req.files.file) {
//             return res.status(400).json({msg: "Loacl File not Provided !"})
//         }
//          // get file
//          const file = req.files.file ;
        
//         const exec = file.originalname.split('.')[1];
         
//           // upload to cloudinary
//         cloudinary.v2.uploader.upload(
//             file.path,
//             {
//             folder : 'avatar' ,
//              width : 150 , 
//              height : 150 , 
//              crop : "fill",
//             // resource_type: "auto",
//             // format:exec,
//             },
//             (err, result) => {
            
//             if (err) throw err;
//             fs.unlinkSync(file.path);
//             res.status(200).json({
//                 msg: "Uploaded successfully.",
//                 url: result.secure_url,
//                 bytes: result.bytes,
//                 format:result.format,
//                 name:file.originalname
//             }
//             );
//             }
//         );

        
//     } catch (error) {
//         res.status(500).json({msg:error.message});
//     }
// })

// module.exports = router;



