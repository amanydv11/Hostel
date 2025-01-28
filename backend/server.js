import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();
mongoose
.connect(
    process.env.MONGO_URI
)
.then(()=>{
    console.log('db connected')
});
const __dirname = path.resolve();
const app = express()
app.use(express.json())
app.use(cookieParser());

const PORT = process.env.PORT || 5000


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