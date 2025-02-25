import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import path from 'path';
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import profileRoutes from './routes/profileRoute.js'
import { cloudinaryConnect } from './utils/cloudinary.js';
import fileUpload from 'express-fileupload';
import roomRoutes from './routes/roomRoutes.js'
dotenv.config();
mongoose
.connect(
    process.env.MONGO_URI
)
.then(()=>{
    console.log('db connected')
});
cloudinaryConnect()
const __dirname = path.resolve();
const app = express()
app.use(express.json())
app.use(cookieParser());

const PORT = process.env.PORT || 5000
app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp/"
    }) 
)

app.use('/api/auth',authRoutes)
app.use('/api/user',userRoutes)
app.use('/api/profile',profileRoutes)
app.use('/api/properties',roomRoutes)






app.use(express.static(path.join(__dirname,'/frontend/dist')));
app.get('*',(res,req)=>{
app.sendFile(path.join(__dirname, 'frontend','dist','index.html'))
})





app.listen(PORT,()=>{
    console.log(`server connected ${PORT}`)
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });