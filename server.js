import express  from "express";
import dotenv from "dotenv";
import connectDb from "./config/dbconfig.js";
dotenv.config()
const app = express() 

import router from "./routes/imageRoutes.js"

//base url //
app.use("/api/Product",router)

//static Images Folder

app.use('/uploads', express.static('./uploads'))

// const port = process.env.PORT ||3000;
const port = 3000;
const DATABASE_URL = process.env.DATABASE_URL;



///database connection
connectDb(DATABASE_URL);

 //file upload ---//
 app.post("/upload",(req,res)=>{
     res.status(200).send({"message":"file is uploaded"})
 })

app.listen(port, () =>{
    console.log(`server is running at http://localhost:${port}`)
})