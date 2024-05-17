import express from 'express';
import { connectDb } from './Database/Db.js';
import dotenv from 'dotenv' ;
import user from './Routes/UserRoute.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

dotenv.config();
connectDb();
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// add cors
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials :true,
}))


app.use('/api/v1' ,user);


app.listen(4000 , () => {
    console.log('Server is running on PORT ....');
})