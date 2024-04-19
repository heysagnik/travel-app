// import { v2 as cloudinary } from "cloudinary";
// import dotenv from "dotenv";

// dotenv.config();

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
// });

// cloudinary.uploader
//   .upload_stream({ resource_type: "auto" }, (error, result) => {
//     if (error) {
//       console.error(error);
//       return res.status(500).json({ error: "Something went wrong" });
//     }
//     // Respond with the URL of the uploaded image
//     res.json({ imageUrl: result.secure_url });
//   })
//   .end(req.file.buffer);
