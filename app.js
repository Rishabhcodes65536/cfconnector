import express from "express"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()
import { join } from "path"
import web from "./routes/web.js"
// import ejs from "ejs"

const app=express()
const port=process.env.PORT || '3000'
const DATABASE_URI=process.env.DATABASE_URI
import connectDB from "./db/connectdb.js";

//ml possib missin rtng

//tags rating submission(specific tle wa ac) languages

connectDB(DATABASE_URI);

app.use(express.urlencoded({extended:false}))

//static files config

// app.use('/user',express.static(join(process.cwd(),"public")))
// app.use('/user/edit',express.static(join(process.cwd(),"public")))


//load routes

app.use("/",web)
app.listen(port,() =>{
    console.log(`Server listening at https://localhost:${port}`)
})
