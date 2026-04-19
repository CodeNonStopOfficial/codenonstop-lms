import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import connectDB from './database/db.js';
dotenv.config({});
import userRouter from './routes/user.route.js'

const app = express();

const port = process.env.PORT || 5050;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");
app.set("trust proxy", true);

app.use(cors({
    origin:process.env.FRONTEND_PORT,
    credentials:true
}));

app.get("/health",(req,res)=>{
    return res.status(200).json({
        messsage : "Welcome to Codenonstop",
        success:true
    })
})
//api configration

app.use('/api/v1/user',userRouter)

app.listen(port , ()=>{
     connectDB();
     console.log(`Server is Running at ${port}`)
})